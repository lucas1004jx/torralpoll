import React from 'react';

const Button = ({name,...props}) =>(
    <button {...props}>
    {name}
    
    <style jsx>{`
        button{
            background:var(--main-color);
            color:#fff;
            padding:15px 20px;
            border:none;
            border-radius:4px;
            text-transform: uppercase;
            margin-right:15px;
            cursor:pointer;
        }
      `}
      </style>
    </button>
)

export default Button;