import React from "react";
import Messages from './pages/Messages'
import "../styles/Header.css";
import PropTypes from "prop-types";

export default class Header extends React.Component {

  static propTypes = {
    chatId: PropTypes.number,
};

static defaultProps = {
  chatId: 1,
};

render() {
  return (
      <div className="header">
          <span style={ { fontSize: '50px' } }>Chat { this.props.chatId }</span>
      </div>
  )

  }
}
