import React from 'react';

const Input = ({ title, num=1, type='text' }) => {
  const inputNum = new Array(num).fill(title);
  return (
    <div className="input-area">
      {title && <h2 className="title">{title}</h2> }
      {inputNum.map ((title, index)=>
        <input key={title+index} className="input" type={type} />
      )}
      <style jsx>
        {`
     .input-area{
         padding:20px 0;
     }
        h2 {
          text-transform: capitalize;
          margin:0;
          margin-bottom:10px;
        }
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
       
    </div>
  );};

export default Input;