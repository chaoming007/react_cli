# my-react-cli是一个轻型的react脚手架工具 #


my-react-cli是一个为了解决工作问题而开发的轻型脚手架工具，还存在很多问题。如果在使用中遇到问题或者希望添加新功能，欢迎积极反馈，谢谢。

## 主要功能有： ##

 1. 快速创建react项目开发模板
 2. 支持sass和css文件编译和提取
 3. 支持图片提取和小图片自动转base64
 
## 安装 ##

环境: Node.js , npm 3.0+

    npm install -g my-react-cli

推荐使用国内镜像安装 cnpm

## 创建模板 ##

安装完成以后，可以在命令行下使用 react init 命令来创建专题，该命令的用法：

    react init my-react
如果不输入项目名称，那系统将采用默认的项目名称react-app进行创建

### 创建完之后执行： ###

    cd 我的项目
    npm install
    npm run dev
    
#### 用命令行进入项目开发目录 ####

    cd <新建的目录>

#### 安装依赖项 ####

    npm install

#### 启动预览和实时刷新 ####

    npm run dev
    
    
执行上述命令后，默认浏览器会自动启动，并打开 http://localhost:8085， 你对网页、样式、脚本、图片做的任何修改，一旦保存，浏览器会立即自动刷新当前页面。

