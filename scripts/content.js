function checkUserIsPorn(name) {
  const responser = localStorage.getItem("twitter_responser_porn_list")
    ? JSON.parse(localStorage.getItem("twitter_responser_porn_list"))
    : [];

  const user = responser.find((item) => {
    return item.screen_name === name;
  });

  if (user) {
    return [user.isPorn, user];
  }

  return [false, null];
}

// "UserAvatar-Container-xx" => 'xx'
function extractUsername(str) {
  const re = /-([^-]*)$/; // Regex to match the substring after the last hyphen

  const match = str.match(re);

  if (match) {
    return match[1];
  } else {
    console.log("No match found");
  }
}

function nodeHandler(node, way) {
  if (node.nodeName === "DIV" && node.getAttribute("data-testid") === "cellInnerDiv") {
    if (node && node.getAttribute("data-user-tag") === "porn") return;

    const descendants = node.querySelectorAll('div[data-testid^="UserAvatar-Container"]');
    const firstElement = descendants[0];
    if (firstElement && firstElement.getAttribute("data-testid")) {
      const name = extractUsername(firstElement.getAttribute("data-testid"));
      const [isPorn, user] = checkUserIsPorn(name);
      if (isPorn) {
        if (node && node.classList && !node.classList.contains("blocked-of-porn")) {
          node.classList.add("blocked-of-porn");
          node.setAttribute("data-user-tag", "porn");
        }
      }
    }
  }
}

function watchDomChange() {
  const targetNode = document;
  const config = { attributes: true, childList: true, subtree: true, characterData: true };

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach(function (node) {
          nodeHandler(node, "childList");
        });
      }

      if (mutation.type === "attributes") {
        const node = mutation.target;
        nodeHandler(node, "attributes");
      }
    });
  });

  // 开始监测目标节点变化
  observer.observe(targetNode, config);
}

function injectScript() {
  const s = document.createElement("script");
  s.src = chrome.runtime.getURL("scripts/injected.js");
  s.onload = async function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
}

function main() {
  watchDomChange();
  injectScript();
}

// Uncaught Error: Extension context invalidated.
// 但是似乎不影响功能
try {
  main();
} catch (error) {
  console.log("main error", error);
}

function syncData(port) {
  try {
    const list = getLatestPornList();
    port.postMessage({ messageType: "syncPornList", list: list });
    setTimeout(() => {
      syncData(port);
    }, 1000);
  } catch (error) {
    console.log("syncData error", error);
  }
}

try {
  const port = chrome.runtime.connect({ name: "sync-porn-list" });
  if (port) {
    port.onDisconnect.addListener((port) => {
      console.log("Disconnected from port", port);
    });
    syncData(port);
  }
} catch (e) {
  console.log("connect error", e);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.messageType === "getLatestPornList") {
    const list = getLatestPornList();
    sendResponse({ list });
  }

  if (message.messageType === "batchBlockPornUserList") {
    const userIds = message.userIds;
    // TODO: 目前尝试一起请求，待观察 twitter 的政策，看后续是否模拟人工操作
    batchBlockPornUserList(userIds);
  }

  if (message.messageType === "setTargetUserFree") {
    const user = message.user;
    removeUserFromPornList(user);
    addUserIntoWhiteList(user);
  }

  if (message.messageType === "resetApp") {
    resetApp();
  }

  if (message.messageType === "blockOneUser") {
    const user = message.user;
    if (user.restId) {
      batchBlockPornUserList([user.restId]);
    }
  }
});

function getCookie(key) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(key + "=")) {
      return cookie.substring(key.length + 1);
    }
  }
  return null;
}

function blockTargetUser(userId) {
  const csrfToken = getCookie("ct0");
  return fetch("https://twitter.com/i/api/1.1/blocks/create.json", {
    headers: {
      // `authorization` 是 main.js 里的写死的参数，不区分用户,不清楚 Twitter 是否会定期更改
      authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
      "content-type": "application/x-www-form-urlencoded",
      "x-csrf-token": csrfToken,
      "x-twitter-active-user": "yes",
      "x-twitter-auth-type": "OAuth2Session",
    },
    body: `user_id=${userId}`,
    method: "POST",
  });
}

function blockAjax() {
  return blockTargetUser("3269947842");
}

function getLatestPornList() {
  return localStorage.getItem("twitter_responser_porn_list")
    ? JSON.parse(localStorage.getItem("twitter_responser_porn_list"))
    : [];
}

function batchBlockPornUserList(userIds) {
  userIds.forEach((userId) => {
    blockTargetUser(userId).then((r) => {
      // remove from porn list
      removeUserFromPornList({ restId: userId });
    });
  });
}

function removeUserFromPornList(user) {
  const { restId } = user;
  const list = localStorage.getItem("twitter_responser_porn_list")
    ? JSON.parse(localStorage.getItem("twitter_responser_porn_list"))
    : [];
  const idx = list.findIndex((item) => item.restId === restId);
  list.splice(idx, 1);
  localStorage.setItem("twitter_responser_porn_list", JSON.stringify(list));
}

function addUserIntoWhiteList(user) {
  const { restId } = user;
  const list = localStorage.getItem("twitter_responser_whitelist")
    ? JSON.parse(localStorage.getItem("twitter_responser_whitelist"))
    : [];
  const idx = list.findIndex((item) => item.restId === restId);
  if (idx === -1) {
    list.push(user);
  }
  localStorage.setItem("twitter_responser_whitelist", JSON.stringify(list));
}

function resetApp() {
  localStorage.removeItem("twitter_responser_porn_list");
}
