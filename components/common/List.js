import React, { useContext } from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import { Icons, Tag, DotMenu } from './index';
import { LoginContext } from '../../context';


const List = (props) =>{
  const { name,  id, timestampCreation, active, userHasVoted } = props;
  const handleHref = () => {
    if(userHasVoted) {
      return active ? `/option?id=${id}` : `/result?id=${id}`;
    }else{
      return active ? `/polls?id=${id}` : `/result?id=${id}`;
    }
  }; 
  const status = active ? 'active' : 'closed';

  const iconStyle = {
    width: 20,
    height: 'auto',
    fill: `${status === 'active' ?  'var(--color-main)' :'var(--color-inActive)'}`
  };
  const { userProfile: { rol } } = useContext(LoginContext);


  
  return ( 
    <div className={`list ${status ==='closed' ? 'closed' : ''}`}>
      <Link href={handleHref()}>
        <a>
          <div className="list-icon">
            <Icons name='polygon' style={iconStyle} />
          </div>
          <div className="date">
            <Moment format="DD.MM.YYYY">
              {timestampCreation}
            </Moment>
          </div>
          <div className="tag">
            <Tag name={status} status={status} style={{ width: '70px' }} />
          </div>
          <div className="list-content">
            {name}
          </div>
        </a>
      </Link>
      {rol === 'Admin' &&(
        <DotMenu id={id} />
      )
      }
      
      <style jsx>
        {`
            .list{
                list-style:none;
                position:relative;
                padding-left:25px;
                padding-right:230px;
                margin-bottom:25px;
                cursor:pointer;
            }
            .list a{
                text-decoration:none;
               
            }
            .list-content{
                font-size:22px;
                color:var(--color-dark);
            }
            .list.closed .list-content{
                color:var(--color-inActive);
            }
            .list-content:after{
                content:"";
                display:block;
                width:0%;
                height:2px;
                background:var(--tag-${status});
                transition:width 0.5s linear;
            }
            .list-content:first-letter{
                text-transform:capitalize;
            }
            .list-icon{
                position:absolute;
                left:0;
                top:3px;
            }
            .tag{
                position:absolute;
                right:0;
            }
            .list-content:hover:after{
                width:100%;
            }

            .date{
              position:absolute;
              right:130px;
              top:50%;
              transform:translateY(-50%);
            }
      `}
      </style>
    </div>
  );
};

export default List;