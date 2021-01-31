import { sendMessage, SEND_MESSAGE } from "../actions/message";
import messagesReducer from "./../reducers/messages";

export default (store) => (next) => (action) => {
  const dispatch = store.dispatch;
  const messages = store.getState().messagesReducer;
  switch (action.type) {
    case SEND_MESSAGE:
      if (action.author === "me") {
        console.log("need send");
        setTimeout(
          () =>
            dispatch(
              sendMessage("I am robot", "robot", action.chatId)
            ),
          1000
        );
      }
      break;
  }
  return next(action);
};
