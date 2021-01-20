import React from 'react';
import PropTypes from 'prop-types';
import { sendMessage} from '../store/actions/message';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default class SendMessage extends React.Component {
  state = {
    message: '',
  };

  static propTypes = {
    send: PropTypes.func.isRequired,
  };

  send = (event) => {
    event.preventDefault();
    this.props.send({ message: this.state.message, author: 'me' });
    this.setState({ message: '' });
  };

  handleChange = (event) => this.setState({ message: event.target.value });

  render() {
    return (
      <div>
        <TextField
          id="standard-multiline-flexible"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.send} type="submit">Send</button>
      </div>
    );
  }
}
