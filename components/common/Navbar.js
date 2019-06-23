import React from 'react';
import Link from 'next/link';
import { Icons } from './index';

const Navbar = () =>{
  const navbar_height = 48;
  const navbar_padding = 5;
  return (
    <nav>
      <Link href='/'>
        <a>
          <Icons name='logo' style={{ width: 'auto', height: navbar_height-navbar_padding*2 }} />
        </a>
      </Link>
        
      <style jsx>
        {`
        nav{
          background:var(--dark-color);
          height:${navbar_height}px;
          padding:${navbar_padding}px 15px;
          display:flex;
          align-items:center;
          margin-bottom:50px;
          position:absolute;
          width:100%;
          left:0;
          top:0;
          box-sizing:border-box;
        }
      `}
      </style>
    </nav>
  );
};

export default Navbar;