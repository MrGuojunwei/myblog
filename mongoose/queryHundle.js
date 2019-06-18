// 常用的查询后处理的方法如下
// sort排序  skip跳过  limit限制   select显示字段  exect执行  count计数  distinct去重

const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/blog', function (err) {
  if (!err) {
    let schema = new Schema({
      age: Number,
      name: String,
      x: Number,
      y: Number
    });

    let temp = mongoose.model('temp', schema);
    // temp.find().sort('x -age').exec(function(err, docs) {
    //   if (!err) {
    //     console.log(docs);
    //   }
    // })

    // temp.find().skip(1).exec(function(err, docs) {
    //   if (!err) {
    //     console.log(docs);
    //   }
    // })

    // temp.find().limit(2).exec(function(err, docs) {
    //   if (!err) {
    //     console.log(docs);
    //   }
    // })

    // temp.find().select('name age -_id').exec(function(err, docs) {
    //   if (!err) {
    //     console.log(docs);
    //   }
    // })

    // temp.find().count(function (err, count) {
    //   if (!err) {
    //     console.log(count)
    //   }
    // })

    temp.find().distinct('age',function (err, distinct) {
      if (!err) {
        console.log(distinct)
      }
    })
  }
})
