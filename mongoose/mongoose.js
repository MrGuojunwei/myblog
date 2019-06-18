const mongoose = require('mongoose')

let db_url = 'mongodb://localhost:27017/myblog'

mongoose.connect(db_url)

mongoose.connection.on('connected', function () {
  console.log('mongoose connection open to' + db_url)
})

mongoose.connection.on('error', function (err) {
  console.log('mongoose connection error:' + err)
})

mongoose.connection.on('disconnected', function () {
  console.log('mongoose connection disconnected');
})

setTimeout(() => {
  mongoose.disconnect(function () {
    console.log('断开链接')
  })
}, 5000);
