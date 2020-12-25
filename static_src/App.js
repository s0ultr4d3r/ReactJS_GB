import React from "react";
import ReactDOM from "react-dom";


let messages = ["Привет", "Как дела?"];
function Messages() {
  const MessageComponent = (props) => <div>{props.text}</div>;

  const MessageField = (props) => {
    return props.messages.map((message) => <MessageComponent text={message} />);
  };

  return <MessageField messages={messages} />;
}

function click() {
  console.log("func click");
  messages.push("хорошо");
  ReactDOM.render(<App />, document.getElementById("root"));
}

function App() {
  return (
    <div >
      <header >
        
        <p>
          <Messages />
          <button onClick={click}>Testing</button>
        </p>
        
      </header>
    </div>
  );
}

export default App;
