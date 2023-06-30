function renderUserList(list, callback) {
  const blockUserList = document.getElementById("block-porn-user-list");
  const countNode = document.getElementById("count");

  list.forEach(function (user) {
    const itemNode = document.createElement("div");
    itemNode.classList.add("user-item");

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.value = user.restId;
    hiddenInput.classList.add("hidden-porn-user-id");

    const contentNode = document.createElement("div");
    contentNode.classList.add("user-content");
    contentNode.innerHTML = `${user.name}<a href="https://twitter.com/${user.screen_name}">@${user.screen_name}</a><br />简介:${user.description}`;

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

    countNode.textContent = list.length;

    itemNode.appendChild(hiddenInput);
    itemNode.appendChild(contentNode);
    itemNode.appendChild(releaseNode);
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
      renderUserList(response.list, (user) => {
        chrome.tabs.sendMessage(activeTab.id, { messageType: "setTargetUserFree", user });
      });
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
