const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/blog', function (err) {
  if (!err) {
    let schema = new Schema({
      num: Number,
      name: String
    })
    // 通过schema对象的query属性，给model添加查询方法
    schema.query.byName = function (name) {
      return this.find({name:new RegExp(name, 'i')})
    }

    var Temp = mongoose.model('Temp', schema);

    new Temp({name: 'huochai'}).save();
    new Temp({name: 'huo'}).save();
    new Temp({name: 'liu'}).save();

    Temp.find().byName('huo').exec(function (err, docs) {
      console.log(docs);
    })
  }
})
