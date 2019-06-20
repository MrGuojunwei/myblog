module.exports = function (Comment) {
  return function (schema, options) {
    schema.post('find', function (posts) {
      return Promise.all(posts.map(function (post) {
        return Comment.find({postId: post._id}).count().exec().then(function (commentsCount) {
          post.commentsCount = commentsCount
          return post
        })
      }))
    })

    schema.post('findOne', function (post) {
      if (post) {
        return Comment.find({postId: post._id}).count().exec().then(function (count) {
          post.commentsCount = count
          return post
        })
      }

      return post
    })
  }
}
