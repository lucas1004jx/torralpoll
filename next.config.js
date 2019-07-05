const withCSS = require('@zeit/next-css');


module.exports = withCSS({
  env: {
    server: 'https://torralbot-back.herokuapp.com',
    client_id: '239251067475-1ov5ieoodtk7579697b8c5r102375ojf.apps.googleusercontent.com'
  },
  webpack: function (config) {
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