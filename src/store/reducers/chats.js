
import { CHAT_LIST } from './../actions/chats';

const initState = [

    { chatname: 'chatname 0', chatId: 0 },
    { chatname: 'chatname 1', chatId: 1 },
    
];



  export default function chatlistReducer(store = initState, action) {
      switch(action.type){
          case CHAT_LIST:
            const newChatId = store.length;

              return [...store, {chatname: action.chatname, chatid: action.newChatId}];
           default:
              return store; 
      }
    }