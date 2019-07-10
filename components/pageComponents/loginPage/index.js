import React, { useContext } from 'react';
import Router from 'next/router';
import { GoogleLogin } from 'react-google-login';
import { Icons } from '../../common/index';
import { LoginContext } from '../../../context';
import { clientId } from '../../../config';

const LoginModal = () => {
  console.log('clientId', clientId);
  const closeStyle = {
    width: '40',
    height: '40'
  };
  const { userLogin } = useContext(LoginContext);
  const responseSuccess = (res) => {
    const { profileObj, tokenId } = res;
    userLogin(tokenId, profileObj);
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
        <div className="login-box">
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={responseSuccess}
            onFailure={responseFailed}
            cookiePolicy="single_host_origin"
            className="google"
            redirectUri="/polls"
          />
        </div>
       

      </div>
      <style jsx>
        {`
        .login-modal{
           width:80%;
            max-width:800px;
            height:100vh;
            background:#fff;
            display:flex;
            justify-content:center;
            align-items:center;
            margin:0 auto;
        }
        .modal-inner{
            position:relative;
            width:100%;
            padding-bottom:56.3%;
            box-shadow: 4px 4px 10px rgba(0,0,0,0.4);
            background:url('/static/svg/login.svg') no-repeat center center;
            background-size:cover;
        }
       
        .close{
            position:absolute;
            right:0;
            top:0;
        }
        
       @media(max-width:768px){
          .login-modal{
           width:100%;
           min-height:664px;
           background:url('/static/svg/login.svg') no-repeat center center;
           background-size:contain;
        }
        .close{
          position:fixed;
          top:15px;
          right:15px;
        }
       
       }
      `}
      </style>
      <style jsx global>
        {`
        .google{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            width:250px;
            max-width:60%;
            border:1px solid var(--color-dark);
            box-shadow: 2px 2px 10px rgb(0,0,0,0.3) !important;
            display:flex !important;
            align-items:center;
            justify-content:center;
            padding: 5px 15px !important;
            background:#fff;
        }
        .google span{
          color:var(--color-dark);
            font-family:var(--font-main);
            font-size:16px;
        }
        body{
          margin:0;
        }
         @media(max-width:576px){
          .google span{
            font-size:12px;
          }
          .google > div{
            padding:0 !important;
          }
        }
      `}
      </style>
    </div>
  );
};

export default LoginModal;