import { combineReducers } from 'redux';
import messagesReducer from './messages';
import chatList from './chats';

export default combineReducers({
  chatList,
  messagesReducer,
});
