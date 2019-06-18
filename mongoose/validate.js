// 文档验证
// 为什么需要文档验证呢，如果不进行文档验证，保存文档时，就可以不按照Schema设置的字段进行设置，分为以下几种情况
// 1、缺少字段的文档可以保存成功
// 2、包含未设置的字段的文档也可以保存，未设置的字段不进行保存
// 3、包含字段类型与设置不同的字段的文档也可以保存成功，不同字段类型的字段被保存为设置的字段类型
// 通过文档验证，就可以避免以上几种情况发生

// 常用的验证包括以下几种

// required 数据必须填写
// default  默认值
// validate  自定义匹配  值为函数  参数代表当前字段  返回true表示通过验证，返回false表示未通过验证
// min  最小值（只适用于数字）
// max  最大值（只适用于数字）
// match 正则匹配（只适用于字符串）
// enum  枚举匹配（只适用于字符串）


const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/blog', function (err) {
  if (!err) {
    let schema = new Schema({
      age: {type: Number, min: 0, max: 100},
      name: {type: String, match: /a/, required: true},
      x: {type: String, enum: ['男','女','未知']},
      y: {type: String, required: true, default: 'yy'}
    });

    let temp = mongoose.model('temp', schema);
  }


})
