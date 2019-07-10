const env = process.env.NODE_ENV;

module.exports.server = env === 'development'? process.env.local : process.env.server;
module.exports.clientId= process.env.client_id;
module.exports.api = require('./api');


