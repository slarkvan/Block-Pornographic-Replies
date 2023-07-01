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
    "福利|粉丝|瑟瑟|线下|附近|多人运动|羞羞|接推广|口令|支付宝|发泄|欲望|老师|释放|老司机|结婚|素质男|电报|无码|门槛|长期固定|反差|绿帽|流出|素人|小视频|换脸|羞辱|未满|色情|黄色|裸体|性瘾|单亲|妈妈|阿姨|空姐|护士|幼师|开放|性交|性爱|口交|乳交|阴道|阴茎|胸部|乳房|乳头|肛交|卖淫|妓女|嫖娼|性服务|性交易|性骚扰|淫秽|淫乱|援交|做爱|SM|调教|肛门|乱伦|迷奸|强奸|春药|裸照|激情|情色|伦理|三级|AV|AV女优|AV男优|性感|诱惑|约炮|性器|性行为|性高潮|xxoo|处女|处男|婬|鸡巴|阴囊|阴部|阴唇|深喉|乳沟|双乳|脱衣|自慰|生殖器|性器官|色诱|情欲|色色|肉体|性生活|淫荡|滥交|嫖客|猥亵|裸体照片|艳照|色狼|换妻|出轨|同房|电影色情|爱爱|现代情色|文学情色|丝袜|少妇|熟女|SM调教|SM舞会|SM虐恋|SM全明星|吞精|小姐|性虐待|偷窥|淫水|性欲|轮奸|换媳|脱裤|阴道口|阳具|阴茎勃起|高潮|兽交|各种姿势|快乐女生|少男少女|美女图片|少女之心|拉拉香港|伦图|鬼畜抄|文学|淫赶|三陪|双性恋|强制UP主|高清性愛|性爱图|性爱视|性爱小电影|性爱动态图|性爱动漫|性爱姿势|性爱插图|成人文学|成人漫画|成人小说|情色视频|情色图片|裸聊|裸聊视频|论坛|淫兽|淫虫|淫蕩|淫妇|淫姐|淫浪|淫流|淫糜|淫魔|淫母|淫女|淫妻|淫情|淫肉|淫乳|淫色|淫声|淫娃|淫液|淫照|幼齿|幼交|幼女|梦幻西游性爱版|禁室培欲|性感沙滩|美女斗地主|少妇自慰|人妻熟女|寂寞少妇|美女裸聊|日本AV女优|日本拉拉|日本SM调教|色即是空|四房色播|爱情岛论坛|爽死我了|男女公关|欧美BT|成人杂志|激情打炮|性息|成人用品|情趣内衣|情色成人|视频聊天|咪咕聊天|视频美女|一夜情|性伴侣|性骚扰|两性知识|成年片|情色电影|成人电影|成人片|鸡吧|肛洞|双峰|领土拍卖|乳神|肉弹|蹄击肉|陰核|摸奶门|咪咪|肉缝|破处|幼b|幼逼|偷拍|无码|有码|魅惑|情色小说|日本AV|无码AV|黄色网站|性爱电影|免费A片|性爱图片|性交图片|人体摄影|艳舞女郎|淫乱熟女|人皮面具|嫩B|淫虫电影|日本淫荡美少女|日本淫电影|肛门喷水|菊花洞|腋毛女|颜射|淫荡笑话|酒瓶插入|乳晕|春宫|骚女|背德|美少女|乱交|AV女优|爱爱视频|性爱贴图|按摩棒|拔出来|爆草|包二奶|暴干|暴奸|暴乳|爆乳|暴淫|屄|被操|被插|被干|逼奸|仓井空|插暴|操逼|操黑|操烂|肏你|肏死|操死|操我|厕奴|插比|插b|插逼|插进|插你|插我|插阴|潮吹|潮喷|成人dv|成人电影|成人论坛|成人小说|成人电|成人电影|成人卡通|成人聊|成人片|成人视|成人图|成人文|成人小|成人电影|成人论坛|成人色情|成人网站|成人文学|成人小说|艳情小说|成人游戏|吃精|赤裸|抽插|扌由插|抽一插|春药|大波|大力抽送|大乳|荡妇|荡女|盗撮|多人轮|发浪|放尿|肥逼|粉穴|封面女郎|风月大陆|干死你|干穴|肛交|肛门|龟头|裹本|国产av|好嫩|豪乳|黑逼|后庭|后穴|虎骑|花花公子|换妻俱乐部|黄片|几吧|鸡吧|鸡巴|鸡奸|寂寞男|寂寞女|妓女|激情|集体淫|奸情|叫床|脚交|金鳞岂是池中物|金麟岂是池中物|精液|就去日|巨屌|菊花洞|菊门|巨奶|巨乳|菊穴|开苞|口爆|口活|口交|口射|口淫|裤袜|狂操|狂插|浪逼|浪妇|浪叫|浪女|狼友|聊性|流淫|铃木麻|凌辱|漏乳|露b|乱交|乱伦|轮暴|轮操|轮奸|裸陪|买春|美逼|美少妇|美乳|美腿|美穴|美幼|秘唇|迷奸|密穴|蜜穴|蜜液|摸奶|摸胸|母奸|奈美|男奴|内射|嫩逼|嫩女|嫩穴|捏弄|女优|炮友|砲友|喷精|屁眼|品香堂|前凸后翘|强jian|强暴|强奸处女|情趣用品|情色|拳交|全裸|群交|惹火身材|人妻|人兽|日逼|日烂|肉棒|肉逼|肉唇|肉洞|肉缝|肉棍|肉茎|肉具|揉乳|肉穴|肉欲|乳爆|乳房|乳沟|乳交|乳头|三级片|骚逼|骚比|骚女|骚水|骚穴|色逼|色界|色猫|色盟|色情网站|色区|色色|色诱|色欲|色b|少年阿宾|少修正|射爽|射颜|食精|释欲|兽奸|兽交|手淫|兽欲|熟妇|熟母|熟女|爽片|爽死我了|双臀|死逼|丝诱|松岛枫|酥痒|汤加丽|套弄|体奸|体位|舔脚|舔阴|调教|偷欢|偷拍|推油|脱内裤|文做|我就色|无码|舞女|无修正|夏川纯|相奸|小逼|校鸡|小穴|小xue|写真|性感妖娆|性感诱惑|性虎|性饥渴|性技巧|性交|性奴|性虐|性息|性欲|胸推|穴口|学生妹|穴图|亚情|颜射|阳具|杨思敏|要射了|夜勤病栋|一本道|一夜欢|一夜情|一ye情|阴部|淫虫|阴唇|淫荡|阴道|淫电影|阴阜|淫妇|淫河|阴核|阴户|淫贱|淫叫|淫教师|阴茎|阴精|淫浪|淫媚|淫糜|淫魔|淫母|淫女|淫虐|淫妻|淫情|淫色|淫声浪语|淫兽学园|淫书|淫术炼金士|淫水|淫娃|淫威|淫亵|淫样|淫液|淫照|阴b|应召|幼交|幼男|幼女|欲火|欲女|玉女心经|玉蒲团|玉乳|欲仙欲死|玉穴|援交|原味内衣|援助交际|张筱雨|招鸡|招妓|中年美妇|抓胸|自拍|自慰|作爱|18禁|99bb|a4u|a4y|adult|amateur|anal|a片|fuck|gay片|g点|g片|hardcore|h动画|h动漫|incest|porn|secom|sexinsex|sm女王|xiao77|xing伴侣|tokyohot|yin荡|贱人|装b|大sb|傻逼|傻b|煞逼|煞笔|刹笔|傻比|沙比|欠干|婊子养的|我日你|我操|我草|卧艹|卧槽|爆你菊|艹你|cao你|你他妈|真他妈|别他吗|草你吗|草你丫|操你妈|擦你妈|操你娘|操他妈|日你妈|干你妈|干你娘|娘西皮|狗操|狗草|狗杂种|狗日的|操你祖宗|操你全家|操你大爷|妈逼|你麻痹|麻痹的|妈了个逼|马勒|狗娘养|贱比|贱b|下贱|死全家|全家死光|全家不得好死|全家死绝|白痴|无耻|sb|杀b|你吗b|你妈的|婊子|贱货|人渣|混蛋|媚外|和弦|兼职|限量|铃声|性伴侣|男公关|火辣|精子|射精|诱奸|强奸|做爱|性爱|发生关系|按摩|快感|处男|猛男|少妇|屌|屁股|下体|a片|内裤|浑圆|咪咪|发情|刺激|白嫩|粉嫩|兽性|风骚|呻吟|sm|阉割|高潮|裸露|不穿|一丝不挂|脱光|干你|干死|我干|裙中性运动|乱奸|乱伦|乱伦类|乱伦小|伦理大|伦理电影|伦理毛|伦理片|裸聊|裸聊网|裸体写真|裸舞视|裸照|美女裸体|美女写真|美女上门|美艳少妇|妹按摩|妹上门|迷幻药|迷幻藥|迷昏口|迷昏药|迷昏藥|迷魂香|迷魂药|迷魂藥|迷奸粉|迷奸药|迷情粉|迷情水|迷情药|迷药|迷藥|谜奸药|骚妇|骚货|骚浪|骚女|骚嘴|色电影|色妹妹|色情表演|色情电影|色情服务|色情图片|色情小说|色情影片|色情表演|色情电影|色情服务|色情片|色视频|色小说|性伴侣|性服务|性福情|性感少|性伙伴|性交|性交视频|性交图片|性奴|性奴集中营|性虐|阴唇|阴道|阴蒂|阴户|阴间来电|阴茎|阴茎增大|阴茎助勃|阴毛|陰唇|陰道|陰戶|淫荡|淫荡美女|淫荡视频|淫荡照片|淫乱|淫靡|淫魔|淫魔舞|淫女|淫情女|淫肉|淫騷妹|淫兽|淫兽学|淫水|淫穴|morphine|摇头丸|迷药|乖乖粉|narcotic|麻醉药|精神药品|爱女人|爱液|按摩棒|拔出来|爆草|包二奶|暴干|暴奸|暴乳|爆乳|暴淫|屄|被操|被插|被干|逼奸|仓井空|插暴|操逼|操黑|操烂|肏你|肏死|操死|操我|厕奴|插比|插b|插逼|插进|插你|插我|插阴|潮吹|潮喷|成人电影|成人论坛|成人色情|成人网站|成人文学|成人小说|艳情小说|成人游戏|吃精|赤裸|抽插|扌由插|抽一插|春药|大波|大力抽送|大乳|荡妇|荡女|盗撮|多人轮|发浪|放尿|肥逼|粉穴|封面女郎|风月大陆|干死你|干穴|肛交|肛门|龟头|裹本|国产av|好嫩|豪乳|黑逼|后庭|后穴|虎骑|花花公子|换妻俱乐部|黄片|几吧|鸡吧|鸡巴|鸡奸|寂寞男|寂寞女|妓女|激情|集体淫|奸情|叫床|脚交|金鳞岂是池中物|金麟岂是池中物|精液|就去日|巨屌|菊花洞|菊门|巨奶|巨乳|菊穴|开苞|口爆|口活|口交|口射|口淫|裤袜|狂操|狂插|浪逼|浪妇|浪叫|浪女|狼友|聊性|流淫|铃木麻|凌辱|漏乳|露b|乱交|乱伦|轮暴|轮操|轮奸|裸陪|买春|美逼|美少妇|美乳|美腿|美穴|美幼|秘唇|迷奸|密穴|蜜穴|蜜液|摸奶|摸胸|母奸|奈美|奶子|男奴|内射|嫩逼|嫩女|嫩穴|捏弄|女优|炮友|砲友|喷精|屁眼|品香堂|前凸后翘|强jian|强暴|强奸处女|情趣用品|情色|拳交|全裸|群交|惹火身材|人妻|人兽|日逼|日烂|肉棒|肉逼|肉唇|肉洞|肉缝|肉棍|肉茎|肉具|揉乳|肉穴|肉欲|乳爆|乳房|乳沟|乳交|乳头|三级片|骚逼|骚比|骚女|骚水|骚穴|色逼|色界|色猫|色盟|色情网站|色区|色色|色诱|色欲|色b|少年阿宾|少修正|射爽|射颜|食精|释欲|兽奸|兽交|手淫|兽欲|熟妇|熟母|熟女|爽片|爽死我了|双臀|死逼|丝诱|松岛枫|酥痒|汤加丽|套弄|体奸|体位|舔脚|舔阴|调教|偷欢|偷拍|推油|脱内裤|文做|我就色|无码|舞女|无修正|吸精|夏川纯|相奸|小逼|校鸡|小穴|小xue|写真|性感妖娆|性感诱惑|性虎|性饥渴|性技巧|性交|性奴|性虐|性息|性欲|胸推|穴口|学生妹|穴图|亚情|颜射|阳具|杨思敏|要射了|夜勤病栋|一本道|一夜欢|一夜情|一ye情|阴部|淫虫|阴唇|淫荡|阴道|淫电影|阴阜|淫妇|淫河|阴核|阴户|淫贱|淫叫|淫教师|阴茎|阴精|淫浪|淫媚|淫糜|淫魔|淫母|淫女|淫虐|淫妻|淫情|淫色|淫声浪语|淫兽学园|淫书|淫术炼金士|淫水|淫娃|淫威|淫亵|淫样|淫液|淫照|阴b|应召|幼交|幼男|幼女|欲火|欲女|玉女心经|玉蒲团|玉乳|欲仙欲死|玉穴|援交|原味内衣|援助交际|张筱雨|招鸡|招妓|中年美妇|抓胸|自拍|自慰|作爱|18禁|99bb|a4u|a4y|adult|amateur|anal|a片|fuck|gay片|g点|g片|hardcore|h动画|h动漫|incest|porn|secom|sexinsex|sm女王|xiao77|xing伴侣|tokyohot|yin荡|认证|足交|制服|白虎";
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
