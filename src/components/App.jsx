import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import Header from "./Header";
import ChatList from "./ChatList";

import "../styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Some text from state",
      timeout: 1000,
      messages: [],
      interval: null,
    };
  }

  componentDidUpdate() {
    console.log("componentWillUpdate");
    console.log(this.state.messages.length, this.state.messages.length % 2);
    if (this.state.messages.length % 2 > 0) {
      console.log("SetTimeOut 53");
      setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            { message: "I do not answer you. I am robot", author: "robot" },
          ],
        });
        this.setState({ timeout });
      }, 2000);
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
        <main>
          <div className="main-top">
            <Header />
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
          </div>
        </main>
      </MuiThemeProvider>
    );
  }
}
