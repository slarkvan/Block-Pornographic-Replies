### 背景

实在受不了推文下无休无止的回复引流的回推了，musk 管不了的，我来管

### 设计宗旨

1. 隐私优先，本插件纯客户端代码，无服务端 api 或前端监控等设计

### 使用方式

1. 进入 [chrome://extensions/](chrome://extensions/)，打开「开发者模式」

2. 把代码包下载解压拖到里面即可


### 效果

目前一定得自己装了插件才有用。黄推用 opacity: 0 进行隐藏。效果如下
具体可以拿 https://twitter.com/abskoop/status/1673960105140707329 检测下

<img src="./misc/demo.png" alt="Image" width="300" height="400">


### 说明

原理采用的是内置的「关键词匹配」检测是否是黄推，然后进行浏览器样式上的隐藏(非推特的 Block 功能)，准确率大约 90%。会有少少部分的错判和漏判

### 后续计划

- [ ] 增加 on/off 配置
- [ ] 增加一键 block 功能
- [ ] 其他

### Buy me a coffee

1. 如果你觉得对你有帮助，可以请我喝杯咖啡

<img src="./misc//20230628-101633.jpeg" alt="Image" width="300" height="450">

### License

MIT
