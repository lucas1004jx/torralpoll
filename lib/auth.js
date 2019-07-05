import axios from 'axios';
import { server } from '../config';

export default async (token) => {
  //console.log('auth---------->', token);
  const res = await axios({
    method: 'post',
    url: `${server}/user`,
    data: {
      token
    }
  })
    .catch(()=> {
      console.log('auth error');
    });
  
  if(res) {
    return {
      isLogin: true,
      token,
      profile: res.data
    };
  }else{
    return {
      isLogin: false,
      token: null,
      profile: {}
    };
  }
  
};
