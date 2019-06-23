import React, { Fragment } from 'react';

const Input = ({ type='text', onChange, value }) => {
  return (
    <Fragment>
     
      <input className="input" type={type} onChange={onChange} value={value} />
     
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