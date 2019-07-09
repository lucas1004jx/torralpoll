const { server } = require('./index');

module.exports = {
  user: `${server}/user`,
  create: `${server}/create`,
  detail: (id) => `${server}/${id}/details`,
  list: `${server}/list`,
  vote: (id) => `${server}/${id}/vote`,
  userOption: (id) => `${server}/${id}/userOption`,
  result: (id) => `${server}/${id}/result`
};