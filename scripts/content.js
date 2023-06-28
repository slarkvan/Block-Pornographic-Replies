function checkUserIsPorn(name) {
  const responser = localStorage.getItem("twitter_responser_list")
    ? JSON.parse(localStorage.getItem("twitter_responser_list"))
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

var targetNode = document;
// 设置 MutationObserver 的配置选项
var config = { attributes: true, childList: true, subtree: true, characterData: true };

// 创建一个新的 MutationObserver 对象
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeName === "DIV" && node.getAttribute("data-testid") === "cellInnerDiv") {
          if (node && node.getAttribute("data-user-tag") === "porn") return;

          const descendants = node.querySelectorAll('div[data-testid^="UserAvatar-Container"]');
          const firstElement = descendants[0];
          if (firstElement && firstElement.getAttribute("data-testid")) {
            const name = extractUsername(firstElement.getAttribute("data-testid"));
            const [isPorn, user] = checkUserIsPorn(name);
            console.log("user::", user);
            if (isPorn) {
              console.log("user:", user, "isPorn:", isPorn, "so we remove DOM node.", node);
              if (node && node.classList && !node.classList.contains("blocked-of-porn")) {
                node.classList.add("blocked-of-porn");
                node.setAttribute("data-user-tag", "porn");
              }
            }
          }
        }
      });
    }

    if (mutation.type === "attributes") {
      const node = mutation.target;
      if (node.nodeName === "DIV" && node.getAttribute("data-testid") === "cellInnerDiv") {
        if (node && node.getAttribute("data-user-tag") === "porn") return;

        const descendants = node.querySelectorAll('div[data-testid^="UserAvatar-Container"]');
        const firstElement = descendants[0];
        if (firstElement && firstElement.getAttribute("data-testid")) {
          const name = extractUsername(firstElement.getAttribute("data-testid"));
          const [isPorn, user] = checkUserIsPorn(name);
          console.log("user::", user);
          if (isPorn) {
            console.log("user:", user, "isPorn:", isPorn, "so we remove DOM node.", node);
            if (node && node.classList && !node.classList.contains("blocked-of-porn")) {
              node.classList.add("blocked-of-porn");
              node.setAttribute("data-user-tag", "porn");
            }
          }
        }
      }
    }
  });
});

// 开始监测目标节点变化
observer.observe(targetNode, config);

/**
 * XHR
 */
const s = document.createElement("script");
s.src = chrome.runtime.getURL("scripts/injected.js");
s.onload = async function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
