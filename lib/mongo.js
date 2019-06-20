const mongoose = require('mongoose')
const config = require('../config/default')

const addCreatedAt = require('../plugins/addCreatedAt')
const addCommentsCount = require('../plugins/addCommentsCount')
const contentToHtml = require('../plugins/contentToHtml')

const Schema = mongoose.Schema

mongoose.connect(config.mongodb);

mongoose.plugin(addCreatedAt)

const UserSchema = new Schema({
  name: { type: 'string', required: true },
  password: { type: 'string', required: true },
  avatar: { type: 'string', required: true },
  gender: { type: 'string', enum: ['m', 'f', 'x'], default: 'x' },
  bio: { type: 'string', required: true }
})

const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, required: true },
  title: { type: 'string', required: true },
  content: { type: 'string', required: true },
  pv: { type: 'number', defualt: 0 }
})

const CommentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, required: true },
  content: { type: 'string', required: true },
  postId: { type: Schema.Types.ObjectId, required: true }
})

// 给post添加留言数commentsCount
PostSchema.plugin(addCommentsCount(mongoose.model('Comment', CommentSchema)))
PostSchema.plugin(contentToHtml())
CommentSchema.plugin(contentToHtml())

module.exports = {
  User: mongoose.model('User', UserSchema),
  Post: mongoose.model('Post', PostSchema),
  Comment: mongoose.model('Comment', CommentSchema)
}


// exports.CommentSchema.index({ postId: 1, _id: 1 }).exec() // 通过文章id获取该文章下所有留言，按留言创建时间升序

