import axios from 'axios';
import Router from 'next/router';
import { api } from '../config';

const handleClose = async (id, token) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: api.close(id),
      headers: { Authorization: token }
    });
    return data;
  } catch (error) {
    console.error('close poll error', error.message);
    const statusCode = error.response && error.response.status || 500;
    return {
      error: statusCode,
      errorMessage: error.message
    };
  }
};

const handleDelete = async (id, token) => {
  try {
    const { data } = await axios({
      method: 'delete',
      url: api.delete(id),
      headers: { Authorization: token }
    });
    return data;
  } catch (error) {
    console.error('delete poll error', error.message);
    const statusCode = error.response && error.response.status || 500;
    return {
      error: statusCode,
      errorMessage: error.message
    };
  }
};

const handleResult = async (id, token) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: api.result(id),
      headers: { Authorization: token }
    });

    return data;
  } catch (error) {
    console.error('get poll result error', error.message);
    const statusCode = error.response && error.response.status || 500;
    return {
      error: statusCode,
      errorMessage: error.message
    };
  }

};
const handleCreate = async (token, question, description, category, optionsArray) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: api.create,
      data: {
        name: question,
        description,
        category,
        options: optionsArray,
      },
      headers: { Authorization: token }
    });

    Router.push('/polls');

    return data;

  } catch (error) {
    console.log(`Create poll error----> ${error}`);
    const statusCode = error.response && error.response.status || 500;
    return {
      error: statusCode,
      errorMessage: error.message
    };
  }
};

const handleUpdate = async (id, token, question, description, category, optionsArray) => {
  try {
    const { data } = await axios({
      method: 'put',
      url: api.update(id),
      data: {
        id,
        name: question,
        description,
        category,
        options: optionsArray,
      },
      headers: { Authorization: token }
    });

    Router.push('/polls');

    return data;

  } catch (error) {
    console.log(`Update poll error----> ${error}`);
    const statusCode = error.response && error.response.status || 500;
    return {
      error: statusCode,
      errorMessage: error.message
    };
  }
};

const handePollDetail = async (id, token) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: api.detail(id),
      headers: { Authorization: token }
    });
    return data;
  } catch (error) {
    console.error('fetch poll detail data error', error.message);
    const statusCode = error.response && error.response.status || 500;
    return {
      error: statusCode,
      errorMessage: error.message
    };
  }

};

const handePollList = async (token) => {
  try {
    const { data } = await axios.get(api.list, { headers: { Authorization: token } });
    return data;
  } catch (error) {
    console.log('fetch polls list error', error.message);
    const statusCode = error.response && error.response.status || 500;
    return {
      error: statusCode,
      errorMessage: error.message
    };
  }
};

const handleCategoryList = async (token) => {
  try {
    const data = await axios.get(api.categoryList, { headers: { Authorization: token } });
    return data;
  } catch (error) {
    console.log('fetch polls list error', error.message);
    const statusCode = error.response && error.response.status || 500;
    return {
      error: statusCode,
      errorMessage: error.message
    };
  }
};


const crud = {
  handleClose,
  handleDelete,
  handleResult,
  handleCreate,
  handleUpdate,
  handePollDetail,
  handePollList,
  handleCategoryList
};

export default crud;
