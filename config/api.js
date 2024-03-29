const { server } = require('./index');

module.exports = {
  user: `${server}/me`,
  create: `${server}/create`,
  update: (id) => `${server}/${id}/update`,
  detail: (id) => `${server}/${id}/details`,
  list: `${server}/list`,
  vote: (id) => `${server}/${id}/vote`,
  userOption: (id) => `${server}/${id}/details`,
  result: (id) => `${server}/${id}/details`,
  close: (id) => `${server}/${id}/close`,
  delete: (id) => `${server}/${id}/delete`,
  categoryList: `${server}/categories`,
};
