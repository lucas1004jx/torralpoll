import React, {Component} from 'react';
import axios from 'axios';
import { Checkbox, Layout, Button } from '../componentes'

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poll: { options: [] },
            selectedOption: null,
            voteSent: false,
        };
    }

    componentDidMount() {
        const { url: { query: { id } } } = this.props;
        axios
            .get(`https://torralbot-api.herokuapp.com/${id}/details`)
            .then(response => {
                const poll = response.data;
                this.setState({ poll })
            })
            .catch(err => console.log('error', err));
        setInterval(() => {
            axios
                .get(`https://torralbot-api.herokuapp.com/${id}/details`)
                .then(response => {
                    const poll = response.data;
                    this.setState({ poll })
                })
                .catch(err => console.log('error', err));
        }, 3000);
    }
    
    onSubmit = () => {
        const { url: { query: { id } } } = this.props;
        axios
        .post(`https://torralbot-api.herokuapp.com/${id}/vote`, {
            user: this.state.name,
            option: this.state.selectedOption,
                
            })
            .then(response => {
                if (response.data && response.data.res && response.data.res.indexOf('Error') !== -1) {
                    this.setState({ errorMessage: 'You have already voted'})
                } else {
                    this.setState({ voteSent: true });
                }
            })
            .catch(err => console.log('error', err));
    }

    render() {
        const { url: { query: { id } } } = this.props;
        const options= this.state.poll.options;
        console.log({ poll: this.state.poll})
        let winner = this.state.poll.options[0];
        this.state.poll.options.forEach(option => {
            console.log({ option });
            console.log({ winner });
            if (option.votes.length > winner.votes.length) {
                winner = option
            }
        })
        if (!this.state.poll.active && winner) {
            return (
                <Layout title="question" classnames="question-page" hideHeader>
                    <h3>This poll is closed</h3>
                    <h3>Future has already been written</h3>
                    <div className="success">
                        <h3 className="selected">Selected option is {winner.name} with {winner.votes.length} vote</h3>
                    </div>
                </Layout>
            );
        }
        if (this.state.voteSent) {
            return (
                <Layout title="question" classnames="question-page" hideHeader>
                <h3>Thanks for your vote! It was received and securely stored.</h3>
                <h3>It cannot be changed by <span className="blink">ANYONE</span></h3>
                </Layout>
            );
        }
        return (
            <Layout title="question" classnames="question-page" author='author'>
            <div className="page-inner">
                <div className="description">
                    {this.state.poll.name}
                </div>
                 <div className="left">
                <ul className="lists">
                    {options.map((option,i)=>
                        <Checkbox
                        option={option.name}
                        key={i}
                        checked={this.state.selectedOption === option.name}
                        onSelect={(value) => this.setState({ selectedOption: value })}
                        />
                        )}
                </ul>
                </div>
                {this.state.errorMessage &&
                    <div className="alert">
                        {this.state.errorMessage}
                        {'\n'}
                        <span className="emoji">🙅</span>
                    </div>
                }
                <div className="submit-button">
                    <span className="voteAs" >Vote</span>
                    <input className="nameInput" type="text" placeholder="name" onChange={(event) => this.setState({ name: event.target.value}) } />
                    <Button name='submit' onClick={this.onSubmit} />
                </div>
            </div>
            <style jsx>{`
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
        )
    }
}

export default Question;