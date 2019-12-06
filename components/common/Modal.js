import React from 'react';
import { UseLockBoodyScroll } from '../../hooks';

const Modal = ({ children }) => {
  UseLockBoodyScroll();
  return (
    <div className='modal'>
      {children}
      <style jsx>{`
      .modal{
      position:fixed;
      width:100%;
      height:100vh;
      background:var(--color-shadow);
      overflow:scroll;
      top:0;
      left:50%;
      transform:translateX(-50%);
      }
      `}
      </style>
    </div>
  );
};

export default Modal;
