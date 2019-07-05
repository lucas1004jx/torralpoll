import React, { useContext } from 'react';
import Router from 'next/router';
import nookies from 'nookies';
import { GoogleLogin } from 'react-google-login';
import { Icons } from './index';
import { LoginContext } from '../context';

const LoginModal = () => {
  const closeStyle = {
    width: '40',
    height: '40'
  };
  const { handleLoginState } = useContext(LoginContext);
  const responseSuccess = (res) => {
    const { profileObj, tokenId } = res;
    nookies.set(null, 'token', tokenId);
    sessionStorage.setItem('profile', JSON.stringify(profileObj));
    Router.push('/polls');
    handleLoginState(true);
  };

  const responseFailed = (res) => {
    console.log('res faild', res);
    Router.push('/');
  };

  const handdleClose = () => {
    Router.push('/');
  };

  return (
    <div className="login-modal">
      <div className="modal-inner">
        <div className="close">
          <Icons name="close" style={closeStyle} fill='none' stroke='#000' onClick={handdleClose} />
        </div>
        <GoogleLogin
          clientId="239251067475-1ov5ieoodtk7579697b8c5r102375ojf.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseSuccess}
          onFailure={responseFailed}
          cookiePolicy="single_host_origin"
          className="google"
          redirectUri="/polls"
        />

      </div>
      <style jsx>
        {`
        .login-modal{
            position:fixed;
            width:100%;
            height:100%;
            background:#fff;
            top:0;
            left:0;
            z-index:100;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .modal-inner{
            position:relative;
            width:900px;
            height:550px;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:url('/static/svg/login.svg') no-repeat center center;
        }
        
        .close{
            position:absolute;
            right:0;
            top:0;
        }
       
      `}
      </style>
    </div>
  );
};

export default LoginModal;