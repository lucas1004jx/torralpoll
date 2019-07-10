import axios from 'axios';
import { api } from '../config';

export default async (token) => {
  //console.log('auth---------->', token);
  
  const res = await axios({
    method: 'post',
    url: api.user,
    data: {
      token
    }
  })
    .catch(error=> {
      console.log('throw auth error');
      throw new Error(error.response.status);
    });


  if(res) {
    console.log('res exist');
    return {
      isLogin: true,
      token,
      profile: res.data,
    };
  }else{
    console.log('res not exist');
    return {
      isLogin: false,
      token: null,
      profile: {},
    };
  }
  
};
