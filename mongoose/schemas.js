var mongoose = require('mongoose')
let Schema = mongoose.Schema

// Schema主要用于定义MongoDB中集合Collection里文档document的结构,可以理解为mongoose对表结构的定义(不仅仅可以定义文档的结构和属性，还可以定义文档的实例方法、静态模型方法、复合索引等)，每个schema会映射到mongodb中的一个collection，schema不具备操作数据库的能力

// 注意 创建Schema对象时，声明字段类型有两种方法，一种是首字母大写的字段类型，另一种是引号包含的小写字段类型
let blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})

blogSchema.add({ name: 'string' });

// Model是由Schema编译而成的假想（fancy）构造器，具有抽象属性和行为。Model的每一个实例（instance）就是一个document，document可以保存到数据库和对数据库进行操作。简单说就是model是由schema生成的模型，可以对数据库的操作。
// 使用model()方法，将Schema编译为Model。model()方法的第一个参数是模型名称

// 注意 一定要将model()方法的第一个参数和其返回值设置为相同的值，否则会出现不可预知的结果

// Mongoose会将集合名称设置为模型名称的小写版。如果名称的最后一个字符是字母，则会变成复数；如果名称的最后一个字符是数字，则不变；如果模型名称为"MyModel"，则集合名称为"mymodels"；如果模型名称为"Model1"，则集合名称为"model1"

// 实例化文档
// 通过对原型Model使用new方法，实例化出文档对象

mongoose.connect('mongodb://localhost:27017/blog', function (err) {
  if (err) {
    console.log('链接失败')
  } else {
    console.log('链接成功')
    let schema = new Schema({
      num: Number,
      name: String,
      size: String
    })

    let MyModel = mongoose.model('MyModel', schema)
    let doc1 = new MyModel({ size: 'small' })

    // 通过new Model1()创建的文档doc1，必须通过save()方法，才能将创建的文档保存到数据库的集合中，集合名称为模型名称的小写复数版

    // 回调函数是可选项，第一个参数为err，第二个参数为保存的文档对象
    doc1.save(function (err, doc) {
      if (err) {
        throw new Error(err)
      } else {
        console.log(doc);
      }
    })
  }
})
