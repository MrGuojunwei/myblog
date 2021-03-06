
const Post = require('../lib/mongo').Post
const CommentModel = require('./comments')

module.exports = {
  // 创建一篇文章
  create: function create(post, cb) {
    return Post.create(post, cb)
  },
  // 通过id获取一篇文章
  getPostById: function getPostById(postId) {
    return Post.findOne({ _id: postId })
      .populate({ path: 'author', model: 'User' })
      .exec()
  },
  // 按创建时间降序获取所有用户文章或者某个特定用户的所有文章
  getPosts: function getPosts(author) {
    const query = {}
    if (author) {
      query.author = author
    }
    return Post
      .find(query)
      .populate({ path: 'author', model: 'User' })
      .sort('-_id')
      .exec()
  },
  // 通过文章id给pv加1
  incPv: function incPv(postId) {
    return Post
      .update({ _id: postId }, { $inc: { pv: 1 } })
      .exec()
  },
  // 通过文章id获取一篇原生文章（编辑文章）
  getRawPostById: function getRawPostById (postId) {
    return Post
      .findOne({_id: postId})
      .populate({path: 'author', model: 'User'})
      .exec()
  },
  // 通过文章id更新一篇文章
  updatePostById: function updatePostById (postId, data) {
    return Post.update({_id: postId}, {$set: data}).exec()
  },
  // 通过文章id删除一篇文章
  delPostById: function delPostById (postId, author) {
    return Post.findOneAndRemove({author: author, _id: postId}).exec()
      .then(function (res) {
        // 文章删除后，再删除该文章下的所有留言
        if (res.result.ok && res.result.n > 0) {
          return CommentModel.delCommentsByPostId(postId)
        }
      })
  }
}
