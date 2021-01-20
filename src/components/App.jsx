import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'; 
import {Provider} from 'react-redux';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Message from './Message.jsx';
import MessageList from './MessageList';
// import SendMessage from './SendMessage';
import Messages from './pages/Messages';
import Router from "./Router";
import initStore from '../store'
import '../styles/App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Some text from state',
      timeout: null,
      messages: [],
      interval: null,
    }; 
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentWillUpdate');
    console.log(this.state.messages.length, this.state.messages.length % 2);
    if (
      prevState.messages.length < this.state.messages.lenght &&
      this.state.messages[this.state.messages.length - 1].author === 'me'
    ) {
      const timeout = setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            { message: 'I do not answer you. I am robot', author: 'robot' },
          ],
        });
        this.setState({ timeout });
      }, 2000);
    }
  }

  send = (objMsg) => {
    this.setState({ messages: [...this.state.messages, objMsg] });
  };

  render() {
    console.log('render');
    return (
      <main><Provider store={initStore()}>
        <BrowserRouter>
          <Grid container>
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item>
                  <Link to="/chat/1">Chat 1</Link>
                </Grid>
                <Grid item>
                  <Link to="/chat/2">Chat 2</Link>
                </Grid>
                <Grid item>
                  <Link to="/chat/3">Chat 3</Link>
                </Grid>
                <Grid item>
                  <Link to="/chat/4">Chat 4</Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
            <Router />
            </Grid>
          </Grid>
        </BrowserRouter></Provider>
      </main>
    );
  }
}
