import React from 'react';

const Tag = ({ name, status, onClick, style, active=true }) => {
  return(
    <div className={`tag ${!active ? 'inActive' : ''}`} onClick={onClick} style={style}>
      {name === 'active' ? 'in process' : name}
      <style jsx>
        {`
    .tag{
        background:var(--tag-${status});
        color:#fff;
        text-transform:uppercase;
        padding:10px 15px;
        display:inline-block;
        border-radius: 5px;
        margin-right:15px;
        cursor:pointer;
        font-size:10px;
        text-align:center;
        transition:background .5s ease;
    }
    .tag.inActive{
      background:var(--inActive-color);
    }    
    `}

      </style>
    </div>
  );
};

export default Tag;