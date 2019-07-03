import React, { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { GoogleLogout } from 'react-google-login';
import { Icons, LoginModal } from './index';
import { LoginContext } from '../context';

const Navbar = () => {
  const navbar_height = 56;
  const navbar_padding = 5;

  const { loginModal, handleLogin, loginState, userProfile, userLogout } = useContext(LoginContext);
  console.log('userProfile', userProfile);
  const logout = () => {
    console.log('logout');
    userLogout();
    Router.replace('/');
  };
  return (
    <nav>
      <Link href='/'>
        <a className="logo">
          <Icons name='logo' style={{ width: 'auto', height: navbar_height - navbar_padding * 2 }} />
        </a>
      </Link>
      <div>
        {!loginState && (
          <span className="login" onClick={handleLogin}>
            SignIn
          </span>
        )}
        <Link href='/createpoll'>
          <a className="create">
            Create poll
          </a>
        </Link>
        {loginState && (
          <div className="profile-container">
            <figure className="profile">
              <img src={userProfile.imageUrl} alt="profile" />
            </figure>
            <div className="profile-detail">
              <p>{userProfile.name}</p>
              <p> {userProfile.email}</p>
              <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={logout}
              />
            </div>
          </div>
        )}
      </div>
      {loginModal && <LoginModal />}

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
          display:inline-block;
        }
        .create{
          border:1px solid #fff;
          padding:8px 16px;
         
        }
        .profile-container{
          position:relative;
          display:inline-block;
          cursor:pointer;
        }
        .profile{
          width:40px;
          height:40px;
          border-radius:50%;
          overflow:hidden;
          padding:0;
          margin:0;
          display:inline-block;
          margin-left:25px;
           vertical-align:middle;
        }
        .profile img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .profile-detail{
          position:absolute;
          background:#fff;
          padding:20px;
          color:#000;
          left:0;
          bottom:0;
          transform:translate(calc(-100% + 65px),100%);
          box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
          display:none;
        }
        .profile-container:hover .profile-detail{
          display:block;
        }
      `}
      </style>
    </nav>
  );
};

export default Navbar;