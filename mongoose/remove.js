// remove() findOneAndRemove() findByIdAndRemove()

// remove()
// model.remove(conditions, [callback]) 删除数据库中名称包括'30'的数据

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// mongoose.connect('mongodb://localhost:27017/blog', function (err) {
//   if (!err) {
//     var schema = new Schema({age: Number, name: String})
//     var temp = mongoose.model('temp', schema)

//     temp.remove({name: /30/}, function (err, doc) {
//       if (!err) {
//         console.log('删除成功')
//       }
//     })
//   }
// }

// [注意]remove()方法中的回调函数不能省略，否则数据不会被删除。当然，可以使用exec()方法来简写代码
// 例如：temp.remove({name: /30/}).exec()
// remove 会删除所有符合条件的数据   如果只删除一条，可以使用findOneAndRemove()
// 删除年龄为50的第一条数据

mongoose.connect('mongodb://localhost:27017/blog', function (err) {
  if (!err) {
    var schema = new Schema({age: Number, name: String})
    var temp = mongoose.model('temp', schema)

    temp.findOneAndRemove({age: {$eq: 50}}, function (err, doc) {
      if (!err) {
        console.log('删除成功')
      }
    })
  }
})

// findByIdAndRemove()
// Model.findByIdAndRemove(id, [options], [callback])
