const marked = require('marked')

module.exports = function () {
  return function (schema, options) {
    schema.post('find', function (comments) {
      return comments.map(function (comment) {
        comment.content = marked(comment.content)
        return comment
      })
    })

    schema.post('findOne', function (comment) {
      if (comment) {
        comment.content = marked(comment.content)
      }

      return comment
    })
  }
}
