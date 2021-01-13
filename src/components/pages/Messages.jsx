import React from "react";
import PropTypes from "prop-types";

import MessageList from "../MessageList";
import SendMessage from "../SendMessage";
import Header from "../Header";
import ChatList from "../ChatList";

import "../../styles/App.css";

import "../../styles/Messages.css";

export default class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Some text from state",
      timeout: null,
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

  state = {
    messages: [],
  };

  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: -1,
  };

  send = (objMsg) => {
    this.setState({ messages: [...this.state.messages, objMsg] });
  };

  render() {
    console.log("render");
    return (
      <>
        <Header chatId={this.props.chatId} className="main-top" />
        <div className="main-container">
          <div className="main-box">
            <ChatList className="main-box-1st  chatlist" />
            <MessageList
              messages={this.state.messages}
              className="main-box-2nd"
            />
            <SendMessage send={this.send} className="main-box-2nd" />
          </div>
        </div>
      </>
    );
  }
}
