// find() findById() findOne()

// find()
// 第一个参数表示查询条件，第二个参数用于控制返回的字段，第三个参数用于配置查询参数，第四个参数是回调函数，回调函数的形式为function(err,docs){}
// Model.find(conditions, [projection], [options], [callback])

// 如果使用第三个参数，前两个参数如果没有值，需要设置为null
temp.find(null, null, {skip: 2}, function (err, docs) {
  console.log(docs)
})

// findById()
// Model.findById(id, [projection], [options], [callback])

// findOne()
// 该方法返回查找到的所有实例的第一个
// Model.findOne(conditions, [projection], [options], [callback])

// $where查询
// 如果要进行更复杂的查询，需要使用$where操作符，$where操作符功能强大而且灵活，它可以使用任意的JavaScript作为查询的一部分，包含JavaScript表达式的字符串或者JavaScript函数
temp.find({$where:"this.x == this.y"},function(err,docs){})
