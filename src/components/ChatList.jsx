import React from "react";
//  import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import Divider from '@material-ui/core/Divider';
//  import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import { Send } from "@material-ui/icons";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import '../styles/ChatList.css'

export default class ChatList extends React.Component {
  render() {
    return (
      <List>
        <ListItem>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="1st Chat" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="2nd Chat" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="3d Chat" />
        </ListItem>
      </List>
      
    );
  }
}
