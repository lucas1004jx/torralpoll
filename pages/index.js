import Link from 'next/link';
import {Layout, Button} from '../componentes';

const Home = () =>{ 

   const btnStyle = {
       background: '#fff',
       color: '#17AD8D',
       fontWeight:'500',
       fontSize:'20px'
   }
    return (
        <Layout classnames='home-page' hideHeader>
        <h1>torralpoll!</h1>
           <figure>
            <img src="/static/svg/graphic.svg" />
           </figure>
           <div className="create-button">
               <div className="intro">
                <p>
                Once upon a time (like until now), there was a group of people, working together in a splendid company.
                </p>
                <p>From time to time (every friday) they enjoy going out for lunch in one among the most fancy (maybe not ) restaurants around their workplace.</p>
                <p>They are supposed to choose the restaurant in a democratic and civilized way but since the first introduction of the current  voting system a lot of doubts have arisen, a lot of rumors surround the system and its keeper and maintainer regarding the lawfulness of their methods. </p>
                <p>The growing discontent among the people of the company led to the birth of the tool we are going to unveil today in order to end the era of oppression and tyranny of the old voting system.  
                    </p>
               </div>
               <Link href="/createpolling">
                <a className="btn">
                    <Button name="create a poll" style={btnStyle}/> 
                </a>
               </Link>
                
           </div>
          
        <style jsx global>{`
        .home-page{
            background:var(--dark-color);
            margin:0;
            padding:0;
            width:100vw;
            height:100vh;
            max-width:none;
            min-height: 773px;
        }
        figure{
            width:500px;
            position:absolute;
            bottom:0;
            right:50px;
            margin:0;
        }
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
        .create-button{
            position:absolute;
            top:45%;
            left:15%;
            max-width:500px;
            color:#fff;
            font-size:15px;
            line-height:1.5;
            overflow:hidden;
        }
        h1{
            color:#fff;
            position:absolute;
            top:20%;
            left:50px;
            transform:rotate(-30deg);
            font-size:60px;
        }
        h1:after{
            content:'';
            display:block;
            width:100%;
            height:10px;
            background:var(--main-color);
        }
        .intro{
            animation: slideUp 5s 1 forwards;
            }
        .btn{
            animation: show 1s 4s 1 forwards;
            opacity:0; 
        }
        @keyframes slideUp{
            from{transform:translateY(100%)}
            to{transform:translateY(0)}
        }
        @keyframes show{
            from{opacity:0}
            to{opacity:1}
        }
        `}</style>
        </Layout>
    )
}
export default Home;