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

function nodeHandler(node, way) {
  if (node.nodeName === "DIV" && node.getAttribute("data-testid") === "cellInnerDiv") {
    if (node && node.getAttribute("data-user-tag") === "porn") return;

    const descendants = node.querySelectorAll('div[data-testid^="UserAvatar-Container"]');
    const firstElement = descendants[0];
    if (firstElement && firstElement.getAttribute("data-testid")) {
      const name = extractUsername(firstElement.getAttribute("data-testid"));
      const [isPorn, user] = checkUserIsPorn(name);
      if (isPorn) {
        console.log("[user]:", user, "isPorn:", isPorn, "so we add css to hide it.");
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

main();
