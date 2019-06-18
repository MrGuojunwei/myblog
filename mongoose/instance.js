const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/blog', function (err) {
  if (!err) {
    let schema = new Schema({
      num: Number,
      name: String,
      size: String
    })

    schema.statics.findByName = function (name, cb) {
      return this.model('MyModel').find({name: new RegExp(name, 'i')}, cb)
    }

    var MyModel = mongoose.model('MyModel', schema)
    var doc1 = new MyModel({name: 'doc1', size: 'small'});
    var doc2 = new MyModel({name: 'doc2', size: 'small'});
    var doc3 = new MyModel({name: 'doc3', size: 'big'});

    doc1.save();
    doc2.save();
    doc3.save();
    setTimeout(function() {
      MyModel.findByName('doc1', function (err, docs) {
        docs.forEach(function (item, index, arr) {
          console.log(item.name)
        })
      })
    },0)
  }
})
// 【Methods 和 Statics 的区别】
// statics是给model添加方法，methods是给实例（instance）添加方法
