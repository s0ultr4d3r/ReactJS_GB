import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import Button from "material-ui/FlatButton";

export default class SendMessage extends React.Component {
  /* static propTypes = {
    chatId: PropTypes.number.isRequired,
  };

  state = {
    chats: {
      1: {title: 'chat 1', MessageList: [1]},
      2: {title: 'chat 2', MessageList: [2]},
      3: {title: 'chat 3', MessageList: []},
          },
          messages: {
            1: {text: 'Hello', author: 'robot'},
            2: {text: 'Hi!', author: 'robot'},
          },
          input: ' ',
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
        Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
        setTimeout(() =>
            this.handleSendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
    }
}

handleSendMessage = (message, sender) => {
    const { messages, chats, input } = this.state;
    const { chatId } = this.props;

    if (input.length > 0 || sender === 'bot') {
        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, sender: sender}},
            chats: {...chats,
                [chatId]: { ...chats[chatId],
                    messageList: [...chats[chatId]['messageList'], messageId]
                }
            },
        })
    }
    if (sender === 'me') {
        this.setState({ input: '' })
    }
};

handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event) => {
      if (event.keyCode === 13) { // Enter
          this.handleSendMessage(this.state.input, 'me')
      }
  };

  render() {
      const { messages, chats } = this.state;
      const { chatId } = this.props;

      const messageElements = chats[chatId].messageList.map((messageId, index) => (
          <Message
              key={ index }
              text={ messages[messageId].text }
              sender={ messages[messageId].sender }
          />));

      return [
          <div key='messageElements' className="message-field">
              { messageElements }
          </div>,
          <div key='textInput' style={ { width: '100%', display: 'flex' } }>
              <TextField
                  name="input"
                  fullWidth={ true }
                  hintText="Введите сообщение"
                  style={ { fontSize: '22px' } }
                  onChange={ this.handleChange }
                  value={ this.state.input }
                  onKeyUp={ this.handleKeyUp }
              />
              <Button
                  onClick={ () => this.handleSendMessage(this.state.input, 'me') }>
                  <SendIcon />
              </Button>
          </div>
      ]
  }

*/

  state = {
    message: "",
  };

  static propTypes = {
    send: PropTypes.func.isRequired,
  };

  send = () => {
    this.props.send({ message: this.state.message, author: "me" });
    this.setState({ message: "" });
  };

  handleChange = (event) => this.setState({ message: event.target.value });

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      // Enter
      this.handleSendMessage(this.state.input, "me");
    }
  };

  render() {
    return (
      <>
        <TextField
          value={this.state.message}
          onChange={this.handleChange}
          hintText="Введите сообщение"
          // multiline={value.toString()}
          name={"message"}
          onKeyUp={this.handleKeyUp}
        />
        <Button onClick={this.send}>Send</Button>
      </>
    );
  }
}
