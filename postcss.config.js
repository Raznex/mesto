const autoprefixer = require('autoprefixer');
const cssNanoPlugin = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    cssNanoPlugin({preset: 'default'})
  ]
}
