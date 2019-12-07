const withCSS = require('@zeit/next-css');


module.exports = withCSS({
  target: 'serverless',
  env: {
    local: 'http://localhost:4000',
    server: 'https://torralbot-back.herokuapp.com',
    client_id: '239251067475-v53f5pav2r3uior978bbga3vmseotimv.apps.googleusercontent.com',
  },
  webpack: function (config) {
    config.node = { fs: 'empty' };
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
    return config;
  }
});
