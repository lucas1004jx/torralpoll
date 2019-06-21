const Tag = ({ name, status, onClick, style }) => {
  return(
    <div className="tag" onClick={onClick} style={style}>
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
    }    
    `}

      </style>
    </div>
  );
};

export default Tag;