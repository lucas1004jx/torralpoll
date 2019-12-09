const env = process.env.ENVIRONMENT;

module.exports.server = env === 'dev' ? process.env.local : process.env.server;
module.exports.clientId = process.env.client_id;
module.exports.api = require('./api');


console.log('Listening server on ----->', env === 'dev' ? process.env.local : process.env.server);

