import React from 'react';
import Link from 'next/link';
import { Icons } from './index';

const LoginModal = (props) =>{
  const closeStyle ={
    width: '40',
    height: '40'
  };
  return (
    <div className="login-modal">
      <div className="modal-inner">
        <div className="close">
          <Icons name="close" style={closeStyle} fill='none' stroke='#000' onClick={props.onClick} />
        </div>
        
        <Link href="/">
          <a className="google">
            <img src="/static/svg/google.png" alt="google icon" className="google-icon" />
            <p>Sign in with Google</p> 
          </a>
        </Link>  
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
        .google{
            width:250px;
            border:1px solid var(--color-dark);
            display:flex;
            align-items:center;
            justify-content:center;
            padding: 0 15px;
            background:#fff;
            text-decoration:none;
            color:var(--color-dark);
        }
        .google-icon{
            width:25px;
            height:25px;
            flex-shrink:0;
            margin-right:15px;
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