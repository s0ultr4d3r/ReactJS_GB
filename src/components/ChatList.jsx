import React from "react";
import List, { ListItem } from "material-ui/List";

import "../styles/Chatlist.css";

export default class ChatList extends React.Component {
  render() {
    return (
      <List>
        <ListItem>First Chat</ListItem>
        <ListItem>Second chat </ListItem>
        <ListItem>Third chat </ListItem>
      </List>
    );
  }
}
