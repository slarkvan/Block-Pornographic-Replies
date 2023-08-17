function mergeAndUnique(arr1, arr2) {
  const arr = [...arr1, ...arr2];

  const uniqueArr = [...new Set(arr.map((item) => item.screen_name))];

  const result = uniqueArr.map((name) => {
    const item1 = arr1.find((item) => item.screen_name === name);
    const item2 = arr2.find((item) => item.screen_name === name);
    return { ...item1, ...item2 };
  });

  return result;
}

// excute once
const words = (function () {
  const keywordsString =
    "#代孕|#侮辱|#妈妈|#抚摸|#磕头|#秘书|#蒙眼|10天1cm|18禁|amateur|anal|av|a片|gay片|g点|g片|h动漫|h动画|porn|sm|telegram下载|tg下载|tg：|xing伴侣|yin荡|➕✈️|➕电报|一ye情|一ye欢|一夜情|一夜欢|万人斩|万艾可|三件套|三级|三陪|下体|不谈情|不走进生活|丝袜|丝诱|两性知识|中学老师一枚|主页私信|乖乖粉|买春|乱交|乱伦|乱奸|乳交|乳头|乳房|乳晕|乳沟|乳爆|乳神|互相倾诉一下|互相倾诉下|互相认识一下|互相认识下|亚情|人体摄影|人兽|人妻|人皮面具|从前面捅|从后面捅|代孕机构|伟哥|伦图|伦理片|伦理电影|体位|体制内老师|体制秘书|体奸|体质秘书|作爱|供卵|做爱|偷拍|偷欢|偷窥|催情药|催情辅助用品|入驻平台|全国可飞|全裸|兽交|兽奸|兽性|兽欲|内射|写真|凌辱|几吧|出轨|前凸后翘|加微信|加我主页|助勃|助孕|劲爆内容|勃起|包二奶|包选性别|千人斩|单亲|卖淫|印度三哥|厕奴|原味内衣|去衣|双乳|双峰|双性恋|双效款|双臀|反差|发情|发泄|发浪|发生关系|口交|口令|口射|口活|口淫|口爆|叫床|可以互相认识|可约|吃精|各种姿势|同城|同房|后庭|后穴|吞精|听话水|听话狗|听话的来|听话的狗|听话的🐕|听话🐕|吸精|呻吟|咪咪|哟啪|唯一 telegram|唯一 tg|唯一telegram|唯一tg|喜欢刺激|喜踩踏|喷水机|喷精|四房色播|国产AV|在主页|在编中学老师|在编小学教师|在编教师|在职中学老师|在职小学教师|在职教师|坐脸|增大|增粗|壮阳|处女|处男|多人轮|多人运动|大乳|大波|天然补品|套弄|女M|女S|女m|女s|女主人|女优|女公关|女奴|女王|女私教|女空姐|女郎|奶子|奸情|好嫩|好痒|妓女|妖娆|婊|婬|媚外|嫖娼|嫖客|嫩B|嫩b|嫩女|嫩比|嫩穴|嫩逼|学生妹|实战|客户反馈看媒体|寂寞女|寂寞男|密穴|寻m|寻s|射爽|射精|射颜|小xue|小姐姐一枚|小学教师一枚|小学语文老师|小电影|小穴|小视频|小逼|少修正|少儿不宜|少妇|少男少女|屁眼|屁股|巨乳|巨奶|巨屌|希爱力|干你|干死|干穴|年龄要求|幼b|幼交|幼女|幼师|幼比|幼男|幼逼|应召|延时|开苞|强j|强制up主|强奸|强暴|御姐资源|微密圈|必利劲|忠诚的狗狗|忠诚的🐕|快感|思想开放|性交|性伴|性器|性奴|性息|性愛|性感|性技|性服务|性欲|性爱|性生活|性瘾|性癖|性福|性虎|性虐|性行为|性运动|性饥渴|性骚扰|情欲|情色|情趣|惹火身材|懂的来|成人小说|成人文学|成人杂志|成人游戏|成人片|成人用品|成人电影|成人网站|成人论坛|成年小说|成年文学|成年杂志|成年游戏|成年片|成年用品|成年电影|成年网站|成年论坛|手淫|扌由插|打桩|打炮|扮狗|扮🐕|找个狗|找个🐕|找狗狗|找🐕|抓胸|投资孩子最好尝试|护士|抽一插|抽插|抽送|拔出来|招妓|招鸡|拳交|按摩上门|按摩棒|捆绑|捏弄|换妻|换媳|换脸|换装|接推广|推油|揉乳|插b|插你|插我|插暴|插比|插进|插逼|插阴|援交|援助交际|摸奶|摸胸|撩拔|操我|操死|操烂|操肏|操逼|操黑|放尿|无修正|无码|日烂|日逼|春宫|春药|暴乳|暴奸|暴干|暴操|暴淫|暴肏|暴艹|暴草|暴露|有点寂寞|有码|来主页|来场性|极品美女|欠干|欧美bt|欲仙欲死|欲女|欲望|欲火|死逼|母奸|每日大赛|每日疯狂大赛|洗精|流出|流淫|浪叫|浪女|浪妇|浪逼|淫书|淫乱|淫乳|淫亵|淫兽|淫叫|淫声|淫女|淫妇|淫妻|淫姐|淫威|淫娃|淫媚|淫师|淫情|淫教师|淫样|淫母|淫水|淫河|淫浪|淫液|淫照|淫片|淫电影|淫秽|淫穴|淫糜|淫肉|淫色|淫荡|淫蕩|淫虐|淫虫|淫贱|淫赶|淫靡|淫騷|淫魔|深喉|滚一滚|滚床单|滥交|漏乳|潮吹|潮喷|激情|火辣|炮友|熟女|熟妇|熟母|爆乳|爆操|爆肏|爆艹|爆草|爱液|爱爱|爽死我了|爽片|狂插|狂操|狼友|猛男|猥亵|瑜伽老师|瑟瑟|生殖器|男m|男s|男优|男公关|男奴|白嫩|白虎|百人斩|盗撮|直男醇|相奸|看主页|看我主页|砲友|破处|确定下单|福利视频|福利资源|私信主人|私信主页|私信告诉我|私信女|私信领福利|秘唇|穴口|穴图|粉嫩|粉穴|精卵|精子|精液|素人|素质男|素质约|约啪|约炮|约跑|线下|结婚|绿奴|绿帽|美乳|美女上门|美女图片|美女斗地主|美女裸体|美妇|美幼|美穴|美腿|美逼|羞羞|羞辱|群交|老司机|聊性|联系方式:|联系方式：|联系电报|肉体|肉具|肉唇|肉弹|肉棍|肉棒|肉欲|肉洞|肉穴|肉缝|肉茎|肉逼|肏你|肏死|肛交|肛洞|肛门|肥臀|肥逼|背德|胸推|胸部|脚交|脱光|脱内裤|脱衣|脱裤|腋毛女|自慰|自拍|舔脚|舔阴|舞女|色b|色区|色即是空|色妹妹|色小说|色情|色欲|色比|色狼|色猫|色电影|色界|色盟|色色|色视频|色诱|色逼|艳情|艳照|艳舞|艹死|艾力达|草死|荡女|荡妇|菊穴|菊花|菊门|萌妹资源|萝莉资源|蓝P|薄码|虎骑|蜜液|蜜穴|被干|被插|被操|裙底|裤袜|裸体照片|裸照|裸聊|裸舞|裸陪|裸露|要射了|视频美女|视频聊|视频资源|认证|试管|诱奸|诱惑|调教|谜奸药|豪乳|赤裸|足交|足控|踩头|踩背|车震|轮奸|轮操|轮暴|迷奸|迷幻药|迷幻藥|迷情水|迷情粉|迷情药|迷昏口|迷昏药|迷昏藥|迷药|迷藥|迷魂药|迷魂藥|迷魂香|逼奸|酒瓶插入|酥痒|释放|释欲|金马胶囊|针孔|针对所有男性问题|铃木麻|长期m|长期s|长期固定|长期的m|长期的s|门槛|阳具|阴b|阴唇|阴囊|阴户|阴核|阴比|阴毛|阴精|阴茎|阴蒂|阴逼|阴道|阴部|阴阜|阿姨|附近加我电报|陰唇|陰戶|陰核|陰道|集体淫|需要的主页简介|露b|靠谱狗|靠谱的狗|靠谱的🐕|靠谱🐕|鞭打|领取福利|颜射|风骚|食精|骚b|骚嘴|骚女|骚妇|骚水|骚浪|骚穴|骚货|骚贱贱|骚逼|高潮|鬼畜抄|魅惑|鸡吧|鸡奸|鸡巴|黄片|黄网|黄色网站|黑丝|黑逼|龟头|🐶🐶|🔞|🫦🫦🫦";
  const words = keywordsString.split("|");
  return words;
})();

// GPT 给出的关键词，我啥也不知道
function isPornography(str) {
  return words.some((s) => str.includes(s));
}

function parseTwitterResponserInfo(response) {
  const entries = response.data.threaded_conversation_with_injections_v2.instructions[0].entries;
  const conversationEntries = entries.filter((entry) => entry.entryId.includes("conversationthread-"));
  const resultList = conversationEntries.map((entry) => {
    const result = entry.content.items[0].item.itemContent.tweet_results.result;
    return result;
  });

  const userInfo = resultList
    .map((result) => {
      // "TweetWithVisibilityResults" | "Tweet"
      if (result.__typename !== "Tweet") return;

      const full_text = result.legacy.full_text;
      const following = result.core.user_results.result.legacy.following;
      const description = result.core.user_results.result.legacy.description;
      const name = result.core.user_results.result.legacy.name;
      const screen_name = result.core.user_results.result.legacy.screen_name;
      const avatar = result.core.user_results.result.legacy.profile_image_url_https;
      const restId = result.core.user_results.result.rest_id;

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

      // whitelist
      const whiteList = localStorage.getItem("twitter_responser_whitelist")
        ? JSON.parse(localStorage.getItem("twitter_responser_whitelist"))
        : [];
      const matchedWhiteList = whiteList.some((item) => item.screen_name === screen_name);
      if (matchedWhiteList) {
        isPorn = false;
      }

      // `user` who you are `following`
      if (following) {
        isPorn = false;
      }

      const user = {
        full_text,
        description,
        name,
        screen_name,
        isPorn,
        field,
        restId,
        avatar,
      };

      return user;
    })
    .filter(Boolean);

  return userInfo;
}

function hijackXHR() {
  const XHR = XMLHttpRequest.prototype;
  const open = XHR.open;
  const send = XHR.send;
  const setRequestHeader = XHR.setRequestHeader;

  XHR.open = function () {
    return open.apply(this, arguments);
  };

  XHR.setRequestHeader = function () {
    return setRequestHeader.apply(this, arguments);
  };

  XHR.send = function () {
    this.addEventListener("load", function () {
      const url = this.responseURL;
      try {
        if (this.responseType != "blob") {
          let responseBody;
          if (this.responseType === "" || this.responseType === "text") {
            responseBody = JSON.parse(this.responseText);
          } else {
            responseBody = this.response;
          }

          // only hijack TweetDetail API
          if (url.includes("TweetDetail")) {
            const responserInfo = parseTwitterResponserInfo(responseBody);

            const pornList = responserInfo.filter((item) => item.isPorn);

            let list = localStorage.getItem("twitter_responser_porn_list")
              ? JSON.parse(localStorage.getItem("twitter_responser_porn_list"))
              : [];

            if (list.length > 5000) {
              // 防止数据过大
              list = [];
            }
            const newList = mergeAndUnique(list, pornList);
            localStorage.setItem("twitter_responser_porn_list", JSON.stringify(newList));
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
