// update()
// updateMany()
// find() + save()
// updateOne()
// findOne() + save()
// findByIdAndUpdate()
// findOneAndUpdate()
// 第一个参数conditions为查询条件，第二个参数doc为需要修改的数据，第三个参数options为控制选项，第四个参数是回调函数
// Model.update(conditions, doc, [options], [callback])

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// mongoose.connect('mongodb://localhost:27017/blog', function (err) {
//   if (!err) {
//     var schema = new Schema({age: Number, name: String})
//     var temp = mongoose.model('temp', schema)
//     temp.update({age: {$gte:20}}, {age: 40}, function (err,raw) {
//       console.log(raw)
//     })
//   }
// })

// mongoose.connect('mongodb://localhost:27017/blog', function (err) {
//   if (!err) {
//     var schema = new Schema({age: Number, name: String})
//     var temp = mongoose.model('temp', schema)
//     temp.update({age: 100}, {age: 10}, {multi: true}, function (err,raw) {
//       console.log(raw)
//     })
//   }
// })

// mongoose.connect('mongodb://localhost:27017/blog', function (err) {
//   if (!err) {
//     var schema = new Schema({age: Number, name: String})
//     var temp = mongoose.model('temp', schema)
//     temp.update({age: 100}, {name: 'hundred'}, {upsert: true, }, function (err,raw) {
//       console.log(raw)
//     })
//   }
// })

// [注意]update()方法中的回调函数不能省略，否则数据不会被更新。如果回调函数里并没有什么有用的信息，则可以使用exec()简化代码
// 例如  temp.update({name: /aa/}, {age: 0}, {upsert: true}).exec()

// updateMany()与update()方法唯一的区别就是默认更新多个文档，即使multi设为false也无法只更新第一个文档
// mongoose.connect('mongodb://localhost:27017/blog', function (err) {
//   if (!err) {
//     var schema = new Schema({age: Number, name: String})
//     var temp = mongoose.model('temp', schema)
//     temp.updateMany({name: /huo/}, {age: 50}, {upsert: true }).exec();
//   }
// })


// find() + save()
// 如果需要更新的操作比较复杂，可以使用find()+save()方法来处理，比如找到年龄小于30岁的数据，名字后面添加'30'字符
// mongoose.connect('mongodb://localhost:27017/blog', function (err) {
//   if (!err) {
//     var schema = new Schema({age: Number, name: String})
//     var temp = mongoose.model('temp', schema)
//     temp.find({age: {$lt: 30}}, function (err, docs) {
//       docs.forEach(function (doc) {
//         doc.name += '30';
//         doc.save()
//       })
//     })
//   }
// })

// updateOne()
// updateOne()方法只能更新找到的第一条数据，即使设置{multi:true}也无法同时更新多个文档

// findOne() + save()
// 如果需要更新的操作比较复杂，可以使用findOne() + save()方法来处理，比如找到名字为'huochai'的数据，年龄加100岁

mongoose.connect('mongodb://localhost:27017/blog', function (err) {
  if (!err) {
    var schema = new Schema({age: Number, name: String})
    var temp = mongoose.model('temp', schema)
    temp.findOne({name: /huochai/}, function (err, doc) {
      doc.age += 100;
      doc.save()
    })
  }
})

// findOneAndUpdate()
// fineOneAndUpdate()方法的第四个参数回调函数的形式如下function(err,doc){}

// findByIdAndUpdate()
// fineByIdAndUpdate()方法的第四个参数回调函数的形式如下function(err,doc){}
