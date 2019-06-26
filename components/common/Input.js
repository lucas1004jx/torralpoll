import React, { Fragment } from 'react';

const Input = (props) => {
  return (
    <Fragment>
      <input className="input" {...props} />
     
      <style jsx>
        {`
     
        input{
            display:block;
            width:100%;
            box-sizing:border-box;
            margin-bottom:15px;
            padding:10px;
            border:1px solid var(--main-color);
        }
      `}

      </style>
       
    </Fragment>
  );};

export default Input;