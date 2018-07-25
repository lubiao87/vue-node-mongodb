# demo3
![Image text](https://github.com/lubiao87/img/blob/master/index.png)

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 本项目开发流程和介绍

```bash
# chrome v8引擎 可扩展高性能服务器 高请求高并发有一定的优势 和c语言性能不相上下 单线程 js开发后端服务 非阻塞io  common规范
 * 下载安装node 

# 安装构建项目的vue脚手架框架
 * npm install -g vue-cli 

# 安装淘宝镜像可加快下载代码速度 
 * npm install -g cnpm

# 安装MongoDB ,可参考下面教程安装
 

# 配置数据库文件，默认路径 C:\Program Files\MongoDB\Server\3.4\bin 下执行
 * 新建文件夹，例c:\MongoDB 建三个文件
 ```
   > data

   > etc   当下文件夹新建文件 **mongo.conf**

   > logs  当下文件夹新建文件 **mongo.log**

[node官网下载](http://nodejs.cn/download/)  

[MongoDB官网下载]( https://www.mongodb.com/download-center#community)  

[MongoDB安装详细教程]( https://www.cnblogs.com/jacksoft/p/6910709.html)  

[MongoVue客户端安装地址]( http://mongovue.software.informer.com/download/)  

### 编辑mongo.conf 内容 根据win10 64位系统配置
```javascript
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
```

 * 系统环境变量
  path = C:\Program Files\MongoDB\Server\4.0\bin

 * 运行数据库 
  mongod --dbpath c:\MongoDB\data 

`
2018-07-14T23:10:48.773+0800 I NETWORK  [thread1] waiting for connections on port 27017   //启动成功端口
`

  * mongoVue客户端的使用很简单，得先cmd启动  > mongod --dbpath c:\MongoDB\data 
  * 打开后创建数据库
     ![Image text](https://github.com/lubiao87/img/blob/master/mongovue1.png)

  * 导入json文件增加数据集合

    ![Image text](https://github.com/lubiao87/img/blob/master/mongo_import.png)
  
  * json文件规范
  
    ![Image text](https://github.com/lubiao87/img/blob/master/index.png)


  ### 一些数据库处理命令

```javascript
    C:\Program Files\MongoDB\Server\3.4\bin>mongo  启动mongo数据库sell终端	
    >show dbs 				查看数据库   
    >use admin              创建或进入数据库  	
    >db.createUser({user:"admin",pwd:"admin",roles:["root"] })		创建超级管理员					
    > db.goods.insert({id:101,"name":"biao","age":18})	当前数据库插入数据	   	
    
```

 * 安装服务框架
  > npm i -g express-generator

 * 创建服务 server位服务名

 > express server

 * node启动服务

 > node server/bin/www

***

 ### 分页功能的后台代码

 * 在models文件夹新建js文件编写数据模型(本项目例：goods.js)

```javascript
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// 定义模型
var produtSchema = new Schema({
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productImage":String,
    "productUrl":String
});

//输出数据模型
module.exports = mongoose.model("Good",produtSchema);    //集合这里写要少个s

```

 * 在routes新建路由查询数据的js代码

```javascript
var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Goods = require("../models/goods")

// mongoose.connect("mongodb://root:123456@127.0.0.1:27017/") 带密码的链接数据库
mongoose.connect("mongodb://localhost:27017/db_demo",{ useNewUrlParser: true });

mongoose.connection.on("connected",function () {
    console.log("链接成功")
})
mongoose.connection.on("error",function () {
  console.log("链接失败")
})
mongoose.connection.on("disconnected",function () {
  console.log("链接断开")
})

/* GET users listing. */
router.get('/', function(req, res, next) {
    //查找数据
//   Goods.find({ },function(err,doc){
      let page =parseInt(req.param("page")) ;   //获取前端的参数 expares框架
      let pageSize =parseInt(req.param("pageSize")) ;  //数量
      let sort =req.param("sort");    
      let skip =(page-1) * pageSize;
      let params = {};              //假设的条件
      let goodsModel = Goods.find(params).skip(skip).limit(pageSize);   //查找所有数据skip()跳过N条
      goodsModel.sort({"salePrice":sort});   //排序 1升序  -1降序
      goodsModel.exec(function (err,doc) { 
        if(err){
            //输出json文件
            res.json({
                status:"0",
                msg:err.message
            })
        }else{
            res.json({
                status:"200",
                msg:"",
                result:{
                    count:doc.length,
                    list:doc
                }
            })
        }
       })
   
//   })
});

module.exports = router;


```

***
 * 可自己创建项目 也可使用此项目，此项目依赖的插件以配置好
  > vue init webpack Demo1 

  > npm install --save axios			*下载获取数据插件*

  > npm i mongoose --save				*安装数据处理的插件到项目*



  ![Image text](https://github.com/lubiao87/img/blob/master/v2.png)
  ![Image text](https://github.com/lubiao87/img/blob/master/v3.png)

  
 * 也可使用Git命令从Github下载代码仓库，先安装git版本管理工具
   [git下载]( https://gitforwindows.org/)

 > $ git init

 > $ git clone 'https://github.com/lubiao87/vue-node-mongodb.git'

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




