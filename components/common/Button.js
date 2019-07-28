import React from 'react';

const Button = ({ name, margin=0, ...props }) =>(
  <button {...props}>
    {name}
    
    <style jsx>
      {`
        button{
            font-family:var(--font-main);
            background:var(--color-main);
            color:#fff;
            padding:12px 20px;
            border:none;
            border-radius:6px;
            text-transform: uppercase;
            cursor:pointer;
            min-width:100px;
            margin-right:${margin}px;
            transition:all 0.3s;
        }
      `}
    </style>
  </button>
);

export default Button;