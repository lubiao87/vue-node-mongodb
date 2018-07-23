# demo3
![Image text](https://github.com/lubiao87/vue-node-mongodb/blob/master/src/assets/index.png)

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 本项目开发流程和介绍

```bash
# chrome v8引擎 可扩展高性能服务器 高请求高并发有一定的优势 和c语言性能不相上下 单线程 js开发后端服务 非阻塞io  common规范
 * 下载安装node [node官网下载](http://nodejs.cn/download/)

# 安装构建项目的vue脚手架框架
 * npm install -g vue-cli 

# 安装淘宝镜像可加快下载代码速度 
 * npm install -g cnpm

# 安装MongoDB ,可参考菜鸟教程安装
 [MongoDB官网下载]( https://www.mongodb.com/download-center#community)
 [MongoDB安装详细教程]( https://www.cnblogs.com/jacksoft/p/6910709.html)

# 配置数据库文件，默认路径 C:\Program Files\MongoDB\Server\3.4\bin 下执行
 * 新建文件夹，例c:\MongoDB 建三个文件
   > data
   > etc   当下文件夹新建文件 **mongo.conf**
   > logs  当下文件夹新建文件 **mongo.log**

 ```

# 编辑mongo.conf 内容 根据win10 64位系统配置
`
    #数据库路径
    dbpath=c:\MongoDB\data\
    #日志输出文件路径
    logpath=c:\MongoDB\logs\mongo.log
    #错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
    logappend=true
    #启用日志文件，默认启用
    journal=true
    #这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
    quiet=true
    #端口号 默认为27017
    port=27017
    #http 配置
    httpinterface=true
`

# 系统环境变量
 * path = C:\Program Files\MongoDB\Server\4.0\bin

 # 运行数据库 
 * mongod --dbpath c:\MongoDB\data 
`
2018-07-14T23:10:48.773+0800 I NETWORK  [thread1] waiting for connections on port 27017   //启动成功端口
`
 # 安装服务框架
 * npm i -g express-generator

 # 创建服务 server位服务名
 * express server

 # 可自己创建项目 也可使用此项目，此项目依赖的插件以配置好
   vue init webpack Demo1 
  > npm install --save axios			下载获取数据插件
  > npm i mongoose --save				安装数据处理的插件到项目



  ![Image text](https://github.com/lubiao87/img/blob/master/v2.png)
  ![Image text](https://github.com/lubiao87/img/blob/master/v3.png)

  
 # 也可使用Git命令从Github下载代码仓库，先安装git版本管理工具
   [git下载]( https://gitforwindows.org/)

  $ git init
  $ git clone ' [MongoDB官网下载](https://github.com/lubiao87/vue-node-mongodb.git) '

***
    # 下载依赖项
    cnpm install

    # 调试
    npm run dev

    # 打包生产
    npm run build

    # build for production and view the bundle analyzer report
    npm run build --report

    # 启动服务
    npm run server


    ###一些数据库处理命令
    `
    C:\Program Files\MongoDB\Server\3.4\bin>mongo  启动mongo数据库sell终端	
    >show dbs 				查看数据库   
    >use admin              创建或进入数据库  	
    >db.createUser({user:"admin",pwd:"admin",roles:["root"] })		创建超级管理员					
    > db.goods.insert({id:101,"name":"biao","age":18})	当前数据库插入数据	   	
    

    `

