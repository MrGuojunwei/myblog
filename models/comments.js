
const Comment = require('../lib/mongo').Comment

module.exports = {
  // 创建一个留言
  create: function create(comment, cb) {
    return Comment.create(comment, cb)
  },
  // 通过留言id获取一条留言
  getCommentById: function getCommentById(commentId) {
    return Comment.findOne({ _id: commentId}).exec()
  },
  // 通过文章id删除该文章下所有留言
  delCommentsByPostId: function delCommentsByPostId (postId) {
    return Comment.remove({postId: postId}).exec()
  },
  // 通过文章id获取该文章下所有留言，按留言创建时间升序
  getComments: function getComments(postId) {
    return Comment
      .find({postId: postId})
      .populate({path: 'author', model: 'User'})
      .sort('_id')
      .exec()
  },
  // 通过文章id获取该文章下留言数
  getCommentsCount: function getCommentsCount (postId) {
    return Comment.find({postId: postId}).count().exec()
  }
}
