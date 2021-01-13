import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Header from "./Header";
import Messages from "./pages/Messages";
import PropTypes from "prop-types";

import "../styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Some text from state",
      timeout: null,
      messages: [],
      interval: null,
    };
  }

  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.messages.length < this.state.messages.length &&
      this.state.messages[this.state.messages.length - 1].author === "me"
    ) {
      setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            { message: "I do not answer you. I am robot", author: "robot" },
          ],
        });
        this.setState({ timeout });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);

    this.setState({ timeout: null });
  }

  send = (objMsg) => {
    this.setState({ messages: [...this.state.messages, objMsg] });
  };

  render() {
    console.log("render");
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <main>
            {/*
        <div className="main-top">
            <Header chatId={ this.props.chatId }/>
            </div>
          <div className="main-container">
            <div className="main-box">
              <div className="main-box-1st  chatlist">
                <ChatList />
              </div>
              <div className="main-box-2nd">
                <MessageList messages={this.state.messages} />
                <SendMessage send={this.send} />
              </div>
            </div>
          
        </div> */}
            {/* <nav>
     <Link to="/chat/1">Chat1</Link>
     <Link to="/chat/2">Chat2</Link>
     <Link to="/chat/3">Chat3</Link>
     <Link to="/chat/4">Chat4</Link>
    </nav> */}
            <Switch>
              <Route exact path="/" component={Messages} />
              <Route
                path="/chat/:chatId"
                render={(obj) => <Messages chatId={obj.match.params.chatId} />}
              />
              <div className="main-top">
                <Route
                  path="/chat/:chatId"
                  render={(obj) => <Header chatId={obj.match.params.chatId} />}
                />
              </div>
            </Switch>{" "}
          </main>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
