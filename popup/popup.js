function extractContent(str) {
  if (typeof str !== "string" || str.length === 0) return;
  const content = str.substring(str.indexOf(" ") + 1);
  return content;
}

function getTaggedReason(field) {
  switch (field) {
    case "full_text":
      return "发言";
    case "description":
      return "简介";
    case "name":
    case "screen_name":
      return "昵称";
    default:
      return "未知";
  }
}

function renderUserList(list, callback, callback2) {
  const blockUserList = document.getElementById("block-porn-user-list");
  const countNode = document.getElementById("count");

  list.forEach(function (user) {
    const itemNode = document.createElement("div");
    itemNode.classList.add("user-item");

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.value = user.restId;
    hiddenInput.classList.add("hidden-porn-user-id");

    const imgWrapNode = document.createElement("div");
    imgWrapNode.classList.add("avatar-wrap");
    const avatarNode = document.createElement("img");
    avatarNode.classList.add("avatar");
    avatarNode.setAttribute("src", user.avatar);
    imgWrapNode.appendChild(avatarNode);

    const contentNode = document.createElement("div");
    contentNode.classList.add("user-content");
    contentNode.innerHTML = `
  <div><a href="https://twitter.com/${user.screen_name}" target="_blank">${user.name}@${user.screen_name}</a></div>
  <div class="mt-2">简介: ${user.description}</div>
  <div class="mt-2">发言: ${extractContent(user.full_text)}</div>
  <div class="mt-2">标记原因: ${getTaggedReason(user.field)}</div>
`;

    const releaseNode = document.createElement("div");
    releaseNode.classList.add("raw-button", "secondary-button", "mw-88");
    releaseNode.textContent = "移出列表";
    releaseNode.addEventListener("click", function () {
      // send msg to content.js
      itemNode.remove();
      countNode.textContent = Number(countNode.textContent) - 1;
      callback({
        restId: user.restId,
        screen_name: user.screen_name,
      });
    });

    const blockNode = document.createElement("div");
    blockNode.classList.add("raw-button", "danger-button", "small-button", "mw-88");
    blockNode.textContent = "屏蔽";
    blockNode.addEventListener("click", function () {
      // send msg to content.js
      itemNode.remove();
      countNode.textContent = Number(countNode.textContent) - 1;
      callback2({
        restId: user.restId,
        screen_name: user.screen_name,
      });
    });

    const buttonsNode = document.createElement("div");
    buttonsNode.classList.add("buttons");
    buttonsNode.appendChild(releaseNode);
    buttonsNode.appendChild(blockNode);

    countNode.textContent = list.length;

    itemNode.appendChild(hiddenInput);
    if (user.avatar) {
      itemNode.appendChild(imgWrapNode);
    }
    itemNode.appendChild(contentNode);
    itemNode.appendChild(buttonsNode);
    blockUserList.appendChild(itemNode);
  });
}

function blockHandler() {
  const hiddenInputs = Array.from(document.getElementsByClassName("hidden-porn-user-id"));
  const hiddenIds = hiddenInputs.map((input) => input.value);

  if (hiddenIds.length === 0) {
    alert("请先获取屏蔽列表");
    return;
  }

  const blockUserList = document.getElementById("block-porn-user-list");
  blockUserList.innerHTML = "正在屏蔽中....3 秒后刷新页面";

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { messageType: "batchBlockPornUserList", userIds: hiddenIds });
  });
}

function getLatestPornListHandler() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { messageType: "getLatestPornList" }, function (response) {
      renderUserList(
        response.list,
        (user) => {
          chrome.tabs.sendMessage(activeTab.id, { messageType: "setTargetUserFree", user });
        },
        (user) => {
          chrome.tabs.sendMessage(activeTab.id, { messageType: "blockOneUser", user });
        }
      );
    });
  });
}

function resetHandler() {
  const blockUserList = document.getElementById("block-porn-user-list");
  blockUserList.innerHTML = "已重置，刷新页面后生效";
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { messageType: "resetApp" });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("block-porn-refresh-btn").addEventListener("click", getLatestPornListHandler);
  document.getElementById("block-porn-block-btn").addEventListener("click", blockHandler);
  document.getElementById("block-porn-reset-btn").addEventListener("click", resetHandler);
});
