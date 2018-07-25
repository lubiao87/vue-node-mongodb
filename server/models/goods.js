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