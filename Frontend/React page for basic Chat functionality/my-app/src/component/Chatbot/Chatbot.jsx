import React, { use } from "react";
import { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {

    const [inputValue, setInputValue] = useState(""); // To store input field value
    const [items, setItems] = useState([]); // Array to store inputs
  
    // Handle input change
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    // Handle adding input to array
    const handleAddItem = () => {
      if (inputValue.trim() !== "") { // Prevent empty entries
        setItems([...items, inputValue]); // Add input to array
        setInputValue(""); // Clear input field
      }
    };

  const dummy_chat = [
    { message: "hello, I am your interviewee bot for today",
        type: 'u'
    },
    {
      message:
        "Hello, I am the interviewer. Lorem32 now this one looks like job for me",
        type: 'b',
    },
    { message: "Lose yourself in the music the moment you own it",
        type: 'u',
     },
    {
      message:
        "apple ball cat dog ele fish goat hen ice joker monkey nest opium pop queen try fry crey why we are doing this, we dont want to lose",
        type: 'b',
    },
  ];

  return (
    <div className="chat-bot">
      <div className="chat-area">
        {dummy_chat.map((item, index) => {
          return (
            <div className={item.type === 'u' ? "chat-box user" : "chat-box bot"}>
              <div className="message">{item.message}</div>
            </div>
          );
        })}
      </div>
      <div className="input-area">
        <input className="input-field" placeholder="Enter your response here" type="text" value={inputValue} onChange={handleInputChange}>

        </input>
        <button className="send-button button-55" onClick={handleAddItem}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;