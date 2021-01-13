import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";

import "../styles/Chatlist.css";

export default class ChatList extends React.Component {
  render() {
    return (
      <List>
        <Link to="/chat/1/">
          <ListItem>First Chat</ListItem>
        </Link>
        <Link to="/chat/2/">
          <ListItem>Second chat </ListItem>
        </Link>
        <Link to="/chat/3/">
          <ListItem>Third chat </ListItem>
        </Link>
      </List>
    );
  }
}
