const moment = require('moment')
const objectIdtoTimestamp = require('objectid-to-timestamp')

module.exports = function () {
  return function(schema, options) {
    schema.post('find', function (results) {
      results.forEach(function (item) {
        item.created_at = moment(objectIdtoTimestamp(item._id)).format('YYYY-MM-DD HH:mm')
      })
      return results
    })

    schema.post('findOne', function (result) {
      if (!result) {
        throw new Error('未找到')
      }
      result.created_at = moment(objectIdtoTimestamp(result._id)).format('YYYY-MM-DD HH:mm')
      return result
    })
  }
}
