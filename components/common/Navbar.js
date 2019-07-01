import React, { useState } from 'react';
import Link from 'next/link';
import { Icons, LoginModal } from './index';

const Navbar = () =>{
  const [loginMode, setLoginMode] = useState(false);

  const navbar_height = 56;
  const navbar_padding = 5;

  const handleLogin = () => {
    setLoginMode(true);
  };
  const handleClose = () => {
    console.log('oginMode', loginMode);
    setLoginMode(false);
  };
  return (
    <nav>
      <Link href='/'>
        <a className="logo"> 
          <Icons name='logo' style={{ width: 'auto', height: navbar_height-navbar_padding*2 }} />
        </a>
      </Link>
      <div>
        
        <span className="login" onClick={handleLogin}>
            SignIn
        </span>
        <Link href='/createpoll'>
          <a className="create">
          Create poll
          </a>
        </Link>
      </div>
      {loginMode && <LoginModal onClick={handleClose} />}

      <style jsx>
        {`
        nav{
          background:var(--color-dark);
          height:${navbar_height}px;
          padding:${navbar_padding}px 15px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:50px;
          position:absolute;
          width:100%;
          left:0;
          top:0;
          box-sizing:border-box;
        }
        a:not(.logo),.login{
          color:#fff;
          font-family:var(--font-header);
          text-decoration:none;
          margin-left:25px;
          text-transform:capitalize;
          cursor:pointer;
        }
        .create{
          border:1px solid #fff;
          padding:8px 16px;
         
        }
      `}
      </style>
    </nav>
  );
};

export default Navbar;