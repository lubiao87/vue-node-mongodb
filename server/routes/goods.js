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
