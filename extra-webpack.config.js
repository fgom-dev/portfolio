const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        TOKEN: JSON.stringify(process.env.TOKEN)
      }
    })
  ]
}
