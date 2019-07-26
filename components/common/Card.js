import React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import { Icons, Button } from '.';

const Card = (props) => {
  console.log('props', props);
  const { name, description,  id, timestampCreation, active, userHasVoted, createdBy } = props;
  const { name: creater, picture } = createdBy;
  const status = active ? 'active' : 'closed';
  const handleHref = () => {
    if(userHasVoted) {
      return active ? `/option?id=${id}` : `/result?id=${id}`;
    }else{
      return active ? `/polls?id=${id}` : `/result?id=${id}`;
    }
  }; 

  const btnStyle = {
    background: '#fff',
    color: 'var(--color-text)',
    border: '1px solid var(--color-text)',
    marginTop: '20px'
  };
  return(
    <div className="card">
      <div className="card-inner">
        <div className="upper">
          <div className="status">{status}</div>
          <div className="creater">
            <figure>
              <img src={picture} alt="profile" />
            </figure>
            <i>{creater}</i> 
          </div>
        </div>
        <div className="lower">
          <div className="text-info">
            <h3 className="title">{name}</h3>
            {description.length > 250 ?
              <p className="description long-text">{description.substring(0, 250)}</p>:
              <p className="description">{description}</p>
            }
          </div>
         
              
        </div>
            
      </div>
      <div className="button">
        <div className="extra-info">
          <div className="date">
            <Icons name="clock" style={{ 'marginRight': '5px' }} />
            <Moment format="DD.MM.YYYY">
              {timestampCreation}
            </Moment>
          </div>
                
        </div>
        <Link href={handleHref()}>
          <a>
            <Button name="see detail" style={btnStyle} />
          </a>
        </Link>
      </div>
      
      <style jsx>
        {`
        .card{
            background:#fff;
            box-shadow: 2px 2px 10px var(--color-shadow);
            position:relative;
            padding-bottom:100px;
        }
       .card-inner{
           display:grid;
           grid-template-rows:178px auto;
       }
        .upper{
            background:url('/static/images/restaurant.jpg') no-repeat center center;
            background-size:cover;
            position:relative;
        }
        .upper:before{
            content:'';
            position:absolute;
            top:0;left:0;right:0;bottom:0;
            background:rgba(0,0,0,0.5);
        }
        .status{
            color:${status === 'active' ? 'var(--color-main)' : 'var(--tag-closed)'};
            text-transform:uppercase;
            background:#fff;
            position:absolute;
            right:-4px;
            top:35px;
            padding:5px 10px;
            font-size:14px;
            border-right: 4px solid ${status === 'active' ? 'var(--color-main)' : 'var(--tag-closed)'};
        }
        .creater{
            color:#fff;
            position:absolute;
            bottom:15px;
            left:15px;
            display:flex;
            align-items:center;
            font-size:12px;
        }
        .creater figure{
            margin:0;
            padding:0;
            width:40px;
            height:40px;
            border-radius:50%;
            overflow:hidden;
            margin-right:12px;
            box-sizing:border-box;
            border:1px solid #fff;
        }
        .creater img{
            width:100%;
            hight:100%;
            object-fit:cover;
        }
        .description{
          margin:0;
        }
        .long-text:after{
            content:'...';
        }
        .lower{
          padding:20px;
          padding-bottom:10px;
        }
        a{
          text-decoration:none;
          color:inherit;
        }
        .date{
          font-size:14px;
          color:var(--color-main);
          display: flex;
          align-items: center
        }
        
        .button{
          marginTop: 10px;
          position: absolute;
          bottom: 15px;
          left: 15px;
        }
      `}
      </style>
    </div>
  );
};

export default Card;