import "./App.css";
import { useState } from "react";
import { WithSeparateStates } from "./WithSeparateStates";

export const OneWayChat = () => {
  const [activeUser, setActiveUser] = useState("ron");
  const [messages, setMessages] = useState({
    ron: ["Hi Ron :)"],
    hermione: [],
    harry: []
  });
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    if (!newMessage) return;
    setMessages({
      ...messages,
      // read activeUser, change relevant key
      // e.g. if activeUser is "harry", harry" key will be changed

      // then copy activeUser's messages, add the new message at the end
      [activeUser]: [...messages[activeUser], newMessage]
    })

    /* 
    
    The above setter is the same as:

    if (activeRecipient === "ron") {
      setMessages({ 
        ...messages,
        "ron": [...messages.ron, newMessage]
      })
    } else if (activeRecipient === "harry") {
      setMessages({ 
        ...messages,
        "harry": [...messages.harry, newMessage]
      })
    }

    // for other recipients too...

    */

    setNewMessage("");
  };

  const messageList = messages[activeUser].map((message, index) => {
    return (
      <div className="message" key={index}>
        {message}
      </div>
    );
  });

  const buttonList = Object.keys(messages).map((name, index) => {
    return (
      <button
        key={index}
        onClick={() => setActiveUser(name)}
        className={activeUser === name ? "selected" : ""}
      >
        {name}
      </button>
    );
  });

  // return <WithSeparateStates />;

  return (
    <div className="container">
      <div className="sidebar">{buttonList}</div>
      <div className="chat">
        <div className="messages">
          {messages[activeUser].length === 0 ? (
            <span>No messages yet</span>
          ) : (
            messageList
          )}
        </div>
        <form className="input-container">
          <input
            type="text"
            placeholder={`Send a message to ${activeUser}...`}
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </form>
      </div>
    </div>
  );
};
