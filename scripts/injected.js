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
  const keywordsString =
    "福利|粉丝|瑟瑟|线下|附近|多人运动|羞羞|接推广|口令|支付宝|发泄|欲望|老师|释放|老司机|结婚|素质男|电报|无码|门槛|长期固定|反差|绿帽|流出|素人|小视频|换脸|羞辱|未满|色情|黄色|裸体|性瘾|单亲|妈妈|阿姨|空姐|护士|幼师|开放|性交|性爱|口交|乳交|阴道|阴茎|胸部|乳房|乳头|肛交|卖淫|妓女|嫖娼|性服务|性交易|性骚扰|淫秽|淫乱|援交|做爱|SM|调教|肛门|乱伦|迷奸|强奸|春药|裸照|激情|情色|伦理|三级|AV|AV女优|AV男优|性感|诱惑|约炮|性器|性行为|性高潮|xxoo|处女|处男|婬|鸡巴|阴囊|阴部|阴唇|深喉|乳沟|双乳|脱衣|自慰|生殖器|性器官|色诱|情欲|色色|肉体|性生活|淫荡|滥交|嫖客|猥亵|裸体照片|艳照|色狼|换妻|出轨|同房|电影色情|爱爱|现代情色|文学情色|丝袜|少妇|熟女|SM调教|SM舞会|SM虐恋|SM全明星|吞精|小姐|性虐待|偷窥|淫水|性欲|轮奸|换媳|脱裤|阴道口|阳具|阴茎勃起|高潮|兽交|各种姿势|快乐女生|少男少女|美女图片|少女之心|拉拉香港|伦图|鬼畜抄|文学|淫赶|三陪|双性恋|强制UP主|高清性愛|性爱图|性爱视|性爱小电影|性爱动态图|性爱动漫|性爱姿势|性爱插图|成人文学|成人漫画|成人小说|情色视频|情色图片|裸聊|裸聊视频|论坛|淫兽|淫虫|淫蕩|淫妇|淫姐|淫浪|淫流|淫糜|淫魔|淫母|淫女|淫妻|淫情|淫肉|淫乳|淫色|淫声|淫娃|淫液|淫照|幼齿|幼交|幼女|梦幻西游性爱版|禁室培欲|性感沙滩|美女斗地主|少妇自慰|人妻熟女|寂寞少妇|美女裸聊|日本AV女优|日本拉拉|日本SM调教|色即是空|四房色播|爱情岛论坛|爽死我了|男女公关|欧美BT|成人杂志|激情打炮|性息|成人用品|情趣内衣|情色成人|视频聊天|咪咕聊天|视频美女|一夜情|性伴侣|性骚扰|两性知识|成年片|情色电影|成人电影|成人片|鸡吧|肛洞|双峰|领土拍卖|乳神|肉弹|奶子|蹄击肉|陰核|摸奶门|咪咪|肉缝|破处|幼b|幼逼|偷拍|吸精|无码|有码|魅惑|情色小说|日本AV|无码AV|黄色网站|性爱电影|免费A片|性爱图片|性交图片|人体摄影|艳舞女郎|淫乱熟女|人皮面具|嫩B|淫虫电影|日本淫荡美少女|日本淫电影|肛门喷水|菊花洞|腋毛女|颜射|淫荡笑话|酒瓶插入|乳晕|春宫|骚女|背德|美少女|乱交|AV女优|爱爱视频|性爱贴图";
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
    const { description, name, screen_name } = core.user_results.result.legacy;
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
    return {
      full_text,
      description,
      name,
      screen_name,
      isPorn,
      field,
    };
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
