import React from "react";

// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Message from "./Message.jsx";
import Example from "./Example";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import Header from './Header';

// import "../styles/App.css";

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

  componentDidUpdate() {
    console.log("componentWillUpdate");
    console.log(this.state.messages.length, this.state.messages.length % 2);
    if (this.state.messages.length % 2 > 0) {
      const timeout = setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            { message: "I do not answer you. I am robot", author: "robot" },
          ],
        });
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
     
       // <main>
          
         <MessageList messages={this.state.messages} />,
          <SendMessage send={this.send} />
       
      // </main>
    );
  }
}
