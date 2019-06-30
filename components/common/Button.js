import React from 'react';

const Button = ({ name, ...props }) =>(
  <button {...props}>
    {name}
    
    <style jsx>
      {`
        button{
            background:var(--color-main);
            color:#fff;
            padding:15px 20px;
            border:none;
            border-radius:8px;
            text-transform: uppercase;
            margin-right:15px;
            cursor:pointer;
        }
      `}
    </style>
  </button>
);

export default Button;