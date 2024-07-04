// webpack.mix.js

let mix = require('laravel-mix')

mix.js('src/js/app.jsx', 'dist')
  .react()
  .setPublicPath('dist')
  .version()
