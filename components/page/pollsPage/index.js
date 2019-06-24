import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Checkbox, Layout, Button, List, Tag } from '../../common';

class PollsPage extends Component {

  static async getInitialProps({ query }) {
    let id, poll = {}, polls = [];

    if (query.id) {
      id = query.id;
      poll = await axios.get(`https://torralbot-back.herokuapp.com/${id}/details`)
        .then(res => res.data)
        .catch(() => console.error('failed to fetch poll detail data'));

      return { poll };
    } else {
      polls = await axios.get('https://torralbot-back.herokuapp.com/list')
        .then(res => res.data)
        .catch(() => console.error('failed to fetch poll list data'));

      return { polls };
    }

  }

  state = {
    selectedOption: null,
    voteSent: false,
    status: 'all'
  };


  onSelect = (value) => {
    console.log('value', value);
    this.setState({ selectedOption: value });
  }

  onSubmit = () => {
    const { url: { query: { id } } } = this.props;
    const { name, selectedOption } = this.state;
    axios
      .post(`https://torralbot-back.herokuapp.com/${id}/vote`, {
        user: name,
        option: selectedOption,

      })
      .then(response => {
        if (response.data && response.data.res && response.data.res.indexOf('Error') !== -1) {
          this.setState({ errorMessage: 'You have already voted' });
        } else {
          this.setState({ voteSent: true });
        }
      })
      .catch(err => console.log('error', err));
  }

  handleFilter = (status) => {
    this.setState({ status });
  }
  renderPollDetail = () => {
    const { options, name, active } = this.props.poll;
    if (this.state.voteSent) {
      return (
        <Layout title="question" classnames="question-page" hideHeader pageTitle='TorralPoll-Question'>
          <h3>Thanks for your vote! It was received and securely stored.</h3>
          <h3>
            It cannot be changed by
            {' '}
            <span className="blink">ANYONE</span>
          </h3>
          <Link href="/polls">
            <a>
              <Button name='back to list' />
            </a>
          </Link>
        </Layout>
      );
    }
    return (
      <Layout title="question" classnames="question-page" author='author' pageTitle='TorralPoll-Question'>
        <div className="page-inner">
          <div className="description">
            {name}
          </div>

          <div className="left">
            <ul className="lists">
              {options && options.map((option, i) => (
                <Checkbox
                  option={option.name}
                  key={i}
                  checked={this.state.selectedOption === option.name}
                  onSelect={() => this.onSelect(option.name)}
                />
              ))}
            </ul>
          </div>
          {this.state.errorMessage && (
            <div className="alert">
              {this.state.errorMessage}
              {'\n'}
              <span className="emoji" role="img">🙅</span>
            </div>
          )}
          <div className="submit-button">
            <span className="voteAs">Vote</span>
            <input className="nameInput" type="text" placeholder="name" onChange={(event) => this.setState({ name: event.target.value })} />
            {active ? <Button name='submit' onClick={this.onSubmit} /> : ''}
            <Link href="/polls">
              <a>
                <Button name='back to list' />
              </a>
            </Link>

          </div>
        </div>
        <style jsx>
          {`
            /* The alert message box */
            .emoji {
                font-size: 50px;
            }
            @-webkit-keyframes blinker {
                from {opacity: 1.0;}
                to {opacity: 0.0;}
            }
            .blink{
                text-decoration: blink;
                -webkit-animation-name: blinker;
                -webkit-animation-duration: 0.6s;
                -webkit-animation-iteration-count:infinite;
                -webkit-animation-timing-function:ease-in-out;
                -webkit-animation-direction: alternate;
            }
            .alert {
              padding: 20px;
              background-color: #f44336; /* Red */
              color: white;
              text-align:center;
              margin-bottom: 15px;
            }
            .success {
                padding: 20px;
                background-color: green; /* Red */
                color: white;
                text-align:center;
                margin-bottom: 15px;
            }
            .selected {
                color: var(--dark-color)
            }
            
          /* The close button */
          .closebtn {
            margin-left: 15px;
            color: white;
            font-weight: bold;
            float: right;
            font-size: 22px;
            line-height: 20px;
            cursor: pointer;
            transition: 0.3s;
          }
            
          /* When moving the mouse over the close button */
          .closebtn:hover {
            color: black;
          }
          .voteAs {
              margin-right: 20px;
          }
          .nameInput {
              margin-right: 20px;
              border-style: solid;
              border-color: grey;
              border-radius: 5px;
              padding: 10px;
          }
          ul{
              padding:0;
              margin:0;
              padding-left: 20px;
              margin-top:30px;
          }
          .submit-button{
              text-align: right;
              margin-top:50px;
          }
          .left{
              width:60%;
          }
          .page-inner{
              max-width:800px;
              margin:0 auto;
          }
        `}
        </style>
      </Layout>
    );
  }

  renderPollList = () => {
    const { polls: { polls } } = this.props;
    const { status } = this.state;
    const Tags=['all', 'active', 'closed'];
    const activePolls = polls.filter(poll => poll.active);
    const closedPolls = polls.filter(poll => !poll.active);
    return (
      <Layout title='Poll list' pageTile='TorralPoll - poll List'>
        <div className="filter">
          {Tags.map(tag =>
            <Tag name={tag} status={tag} onClick={() => this.handleFilter(tag)} active={tag===status} key={tag} />
          )}


        </div>
        {status === 'all' && polls.map(poll => (
          <List content={poll.name} status={poll.active ? 'active' : 'closed'} href={`/polls?id=${poll._id}`} key={poll._id} />
        ))}
        {status === 'active' && activePolls.map(poll => (
          <List content={poll.name} status={poll.active ? 'active' : 'closed'} href={`/polls?id=${poll._id}`} key={poll._id} />
        ))}
        {status === 'closed' && closedPolls.map(poll => (
          <List content={poll.name} status={poll.active ? 'active' : 'closed'} href={`/polls?id=${poll._id}`} key={poll._id} />
        ))}
        <style jsx>
          {`
            .filter{
              margin-bottom:15px;
              border-bottom:2px solid var(--inActive-color);
              padding-bottom:15px;
            }
          `}

        </style>
      </Layout>
    );
  }


  render() {
    const { poll, polls } = this.props;

    if (poll) {
      return this.renderPollDetail();
    } else if (polls) {
      return this.renderPollList();
    }


    return (
      <div>can not find data</div>
    );

    
  }
}

export default PollsPage;