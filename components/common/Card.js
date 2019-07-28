import React, { useState } from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import { Icons, Button, DotMenu } from './index';

const Card = (props) => {
  const [cardHover, setCardHover] = useState(false);
  const { name, description,  id, timestampCreation, active, userHasVoted, createdBy } = props;
  const { name: creater, picture } = createdBy;
  const status = active ? 'active' : 'closed';
  const statusColor = status === 'active' ? 'var(--color-main)' : 'var(--tag-closed)';
  const handleHref = () => {
    if(userHasVoted) {
      return active ? `/option?id=${id}` : `/result?id=${id}`;
    }else{
      return active ? `/polls?id=${id}` : `/result?id=${id}`;
    }
  }; 

  const handleBtnName = () => {
    if(userHasVoted) {
      return active ? 'your option' : 'see result';
    }else{
      return active ? 'see detail' : 'see result';
    }
  }; 


  const btnStyle = {
    background: `${cardHover ? statusColor :  '#fff' }`,
    color: `${cardHover ? '#fff' :  statusColor }`,
    border: `1px solid ${statusColor}`
  };
  return(
    <div
      className="card" 
      onMouseEnter={()=>setCardHover(true)}
      onMouseLeave={()=>setCardHover(false)}
    >
     
      <div className="card-inner">
        <div className="upper">
          <div className='dotMenu'>
            <DotMenu id={id} />
          </div>
          <div className="status">{status}</div>
          <div className="creater">
            <figure>
              <img src={picture} alt="profile" />
            </figure>
            <i>{creater}</i> 
          </div>
        </div>
        <Link href={handleHref()}>
          <a>
            <div className="lower">
              <div className="text-info">
                <h3 className="title">{name}</h3>
                {description.length > 250 ?
                  <p className="description long-text">{description.substring(0, 250)}</p>:
                  <p className="description">{description}</p>
                }
              </div>
            </div>
            <div className="button-area">
          
              <Button name={handleBtnName()} style={btnStyle} className='button' />

              <div className="extra-info">
                <div className="date">
                  <Icons name="clock" style={{ 'marginRight': '5px' }} stroke={statusColor} />
                  <Moment format="DD.MM.YYYY">
                    {timestampCreation}
                  </Moment>
                </div>
                
              </div>
            </div>
          </a>
        </Link>
      </div>
          
       
      <style jsx>
        {`
        .card{
            background:#fff;
            box-shadow: 2px 2px 10px var(--color-shadow);
            position:relative;
            padding-bottom:70px;
            transition:outline .2s ease-out, transform 0.3s ease-out;
        }
        .card:hover{
          outline:4px solid ${statusColor};
          transform:scale(1.01);
        }
       
       .card-inner{
           display:grid;
           grid-template-rows:178px auto;
           height:100%;
           box-sizing:border-box;
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
        .dotMenu{
          position:absolute;
          left:20px;
          top:20px;
        }
        .status{
            color:${statusColor};
            text-transform:uppercase;
            font-weight:bolder;
            background:#fff;
            position:absolute;
            right:-4px;
            top:35px;
            padding:5px 10px;
            font-size:12px;
            border-right: 4px solid ${statusColor};
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
          font-weight:bolder;
          color:${statusColor};
          display: flex;
          align-items: center
        }
        
        .button-area{
          position: absolute;
          display:flex;
          justify-content:space-between;
          align-items:center;
          left:0;
          right:0;
          bottom:0;
          padding: 15px 20px;
        }
      `}
      </style>
    </div>
  );
};

export default Card;