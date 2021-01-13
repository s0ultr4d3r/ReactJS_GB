import React from "react";
import "../styles/Header.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
        <span style={{ fontSize: "50px" }}>Chat {this.props.chatId}</span>
        <Link
          to="/profile"
          style={{ fontSize: "20px", alignContent: "stretch" }}
        >
          Contacts
        </Link>
      </div>
    );
  }
}
