import React from 'react';
import { Layout, List } from '../componentes';


const History = ({lists})=>{
lists=['polling 1', 'polling 1', 'polling 3'];
    return (
        <Layout title='polling' classnames='history-page'>
           {lists.map((list,i)=>
           <List key={i} content={list}/>
           )}
        </Layout>
    )
}
``
export default History;
