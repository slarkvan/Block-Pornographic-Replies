chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === "sync-porn-list") {
    port.onMessage.addListener(function (msg) {
      if (msg.messageType === "syncPornList") {
        const list = msg.list;
        chrome.action.setBadgeText({ text: String(list.length) });
      }
    });
  }
});
