import React from "react";
// import styles from '../styles/Layout';
import App from './App';
import Header from './Header';
import ChatList from './ChatList';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import '../styles/Layout.css';
 import '../styles/Header.css';

export default class Layout extends React.Component {
    
    render() {
        return (
           <MuiThemeProvider>
            <main >
        <div className="header"><Header/></div>
        <div><ChatList/></div>
        <div><App/> </div>
        </main>
        </MuiThemeProvider>
            
        )
    }
}
// <Header/>
// <ChatList/>
// <App/>