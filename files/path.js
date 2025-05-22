const config = require('config')

let MEDIA_PATH
if (config.media.env === 'production') {
  MEDIA_PATH = config.media.productionUrl
} else {
  MEDIA_PATH = 'http://localhost:8001'
}

module.exports = {
  MEDIA_PATH
}
