const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('style', resolve('src/assets/style'))
      .set('components', resolve('src/components'))
  }
}