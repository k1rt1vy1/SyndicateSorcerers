import React from "react";
import "./Chatbot.css";

const Chatbot = () => {
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
        <input className="input-field" placeholder="Enter your response here"></input>
        <button className="send-button button-55">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;