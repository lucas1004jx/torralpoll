const env = process.env.environment;

module.exports.server = env === 'development' ? process.env.local : process.env.server;
module.exports.clientId = process.env.client_id;
module.exports.api = require('./api');

console.log('Listening server on ----->', env === 'development' ? process.env.local : process.env.server);

