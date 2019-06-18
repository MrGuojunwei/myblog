// 文档新增有三种方法，一种是使用上面介绍过的文档的save()方法，另一种是使用模型model的create()方法，最后一种是模型model的insertMany()方法

// save() create() insertMany()
// 使用save()方法，需要先实例化为文档，再使用save()方法保存文档。而create()方法，则直接在模型Model上操作，并且可以同时新增多个文档

const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/blog', function (err) {
  if (!err) {
    let schema = new Schema({
      num: Number,
      name: String
    })

    var Temp = mongoose.model('Temp', schema);
    // create()
    // Temp.create({name: 'xioawang'}, {name:'xiaoli'}, function (err, doc1, doc2) {
    //   console.log(doc1)
    //   console.log(doc2)
    // })

    // insertMany()
    Temp.insertMany([{name: 'xioawang2'}, {name:'xiaoli2'}], function (err, docs) {
      console.log(docs)
    })
  }
})
