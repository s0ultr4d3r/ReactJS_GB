import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import Button from "material-ui/FlatButton";

export default class SendMessage extends React.Component {


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
