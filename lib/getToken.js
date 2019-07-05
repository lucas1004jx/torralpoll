import Cookies from 'js-cookie';

const getToken = (req) => {
  let token='';
  if(req) {
    //console.log('with req-------->', req.cookies.token);
    token =  req.cookies.token;
  }else{
    //console.log('without req--------->', Cookies.get('token'));
    token = Cookies.get('token');
   
  }

  return token;
};

export default getToken;

