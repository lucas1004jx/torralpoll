import axios from 'axios';
import { api } from '../config';

const handleClose = async (id, token) =>{
  const data = await axios({
    method: 'post',
    url: api.close(id),
    headers: { Authorization: token }
  })
    .then(res => res.data)
    .catch((error) => {
      console.error('close poll error', error.message);
      const statusCode = error.response && error.response.status || 500;
      return {
        error: statusCode,
        errorMessage: error.message
      };
    });

  return data;
};

const handleDelete = async (id, token) =>{
  const data = await axios({
    method: 'delete',
    url: api.delete(id),
    headers: { Authorization: token }
  })
    .then(res => res.data)
    .catch((error) => {
      console.error('delete poll error', error.message);
      const statusCode = error.response && error.response.status || 500;
      return {
        error: statusCode,
        errorMessage: error.message
      };
    });

  return data;
};

const handleResult = async (id, token) =>{
  const data = await axios({
    method: 'get',
    url: api.result(id),
    headers: { Authorization: token }
  })
    .then(res => res.data)
    .catch((error) => {
      console.error('get poll result error', error.message);
      const statusCode = error.response && error.response.status || 500;
      return {
        error: statusCode,
        errorMessage: error.message
      };
    });

  return data;
};

export {
  handleClose,
  handleDelete,
  handleResult
};