import React, { useContext } from 'react';
import PollDetail from './PollDetail';
import PollLists from './PollLists';
import { Layout } from '../../common';
import { LoginContext } from '../../context';

const PollsPage = (props) => {
  const { loginState } = useContext(LoginContext);
  //console.log('PollsPage----------->loginState', loginState);
  const { poll, polls } = props;
  if(!loginState) return(
    <Layout>
      <div>YOU NNED TO LOG IN TO SEE POLL LIST</div>
    </Layout>
  );
  if (poll) {
    return <PollDetail {...poll} />;
  } else if (polls) {
    return  <PollLists {...polls} />;
  }


  return (
    <Layout>
      <div>NOTR FOUND DATA</div>
    </Layout>
    
  );


};

export default PollsPage;