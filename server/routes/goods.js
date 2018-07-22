var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Goods = require("../models/goods")

// mongoose.connect("mongodb://root:123456@127.0.0.1:27017/") 链接数据库
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
  Goods.find({ },function(err,doc){
    if(err){
        //输出json文件
        res.json({
            status:"1",
            msg:err.message
        })
    }else{
        res.json({
            status:"0",
            msg:"",
            result:{
                count:doc.length,
                list:doc
            }
        })
    }
  })
});

module.exports = router;
