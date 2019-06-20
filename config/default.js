const defaultConfig = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 100000
  },
  mongodb: 'mongodb://localhost:27017/newblog'
}

module.exports = defaultConfig;
