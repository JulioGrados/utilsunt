const config = require('config')

let MEDIA_PATH
if (config.media.env === 'production') {
  MEDIA_PATH = config.media.productionUrl
} else {
  MEDIA_PATH = path.join(__dirname, '../../../')
}

module.exports = {
  MEDIA_PATH
}
