// 合并并去重函数
function mergeAndUnique(arr1, arr2) {
  // 将两个数组合并成一个数组
  const arr = [...arr1, ...arr2];

  // 使用 Set 数据结构去重
  const uniqueArr = [...new Set(arr.map((item) => item.screen_name))];

  // 根据去重后的数组重新构造对象数组
  const result = uniqueArr.map((name) => {
    const item1 = arr1.find((item) => item.screen_name === name);
    const item2 = arr2.find((item) => item.screen_name === name);
    return { ...item1, ...item2 };
  });

  return result;
}

// GPT 给出的关键词，我啥也不知道
function isPornography(str) {
  chrome.storage.sync.get(['keywords'], function(result) {
    const keywordsString = result.keywords;
  });
  const words = keywordsString.split("|");
  return words.some((s) => str.includes(s));
}

function parseTwitterResponserInfo(response) {
  const entries = response.data.threaded_conversation_with_injections_v2.instructions[0].entries;
  const conversationEntries = entries.filter((entry) => entry.entryId.includes("conversationthread-"));
  const resultList = conversationEntries.map((entry) => {
    const result = entry.content.items[0].item.itemContent.tweet_results.result;
    return result;
  });

  const userInfo = resultList.map((result) => {
    const full_text = result.legacy.full_text;
    const description = result.core.user_results.result.legacy.description;
    const name = result.core.user_results.result.legacy.name; // 前面的中文名
    const screen_name = result.core.user_results.result.legacy.screen_name; // 后面的英文名
    let isPorn = false;
    let field = "";
    if (isPornography(full_text)) {
      isPorn = true;
      field = "full_text";
    } else if (isPornography(description)) {
      isPorn = true;
      field = "description";
    } else if (isPornography(name)) {
      isPorn = true;
      field = "name";
    } else if (isPornography(screen_name)) {
      isPorn = true;
      field = "screen_name";
    }
    const user = {
      full_text,
      description,
      name,
      screen_name,
      isPorn,
      field,
    };
    // if (user.isPorn) {
    //   console.log("user is isPorn::", user.screen_name, user);
    // }
    // console.log("user info::", user.screen_name, user.isPorn);
    return user;
  });
  return userInfo;
}

function hijackXHR() {
  const XHR = XMLHttpRequest.prototype;
  const open = XHR.open;
  const send = XHR.send;
  const setRequestHeader = XHR.setRequestHeader;

  XHR.open = function () {
    this._requestHeaders = {};
    return open.apply(this, arguments);
  };

  XHR.setRequestHeader = function (header, value) {
    this._requestHeaders[header] = value;
    return setRequestHeader.apply(this, arguments);
  };

  XHR.send = function () {
    this.addEventListener("load", function () {
      const url = this.responseURL;
      // const responseHeaders = this.getAllResponseHeaders();
      try {
        if (this.responseType != "blob") {
          let responseBody;
          if (this.responseType === "" || this.responseType === "text") {
            responseBody = JSON.parse(this.responseText);
          } else {
            responseBody = this.response;
          }
          // just hijack TweetDetail API
          console.log("TweetDetail==>");

          if (url.includes("TweetDetail")) {
            const responserInfo = parseTwitterResponserInfo(responseBody);
            const pornList = responserInfo.filter((item) => item.isPorn);

            let list = localStorage.getItem("twitter_responser_list")
              ? JSON.parse(localStorage.getItem("twitter_responser_list"))
              : [];

            if (list.length > 5000) {
              // 防止数据过大
              list = [];
            }
            const newList = mergeAndUnique(list, pornList);
            localStorage.setItem("twitter_responser_list", JSON.stringify(newList));
          }
        }
      } catch (err) {
        console.debug("Error reading or processing response.", err);
      }
    });

    return send.apply(this, arguments);
  };
}
hijackXHR();
