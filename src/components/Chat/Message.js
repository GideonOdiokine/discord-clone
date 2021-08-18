import { Avatar } from "@material-ui/core";
import React from "react";
import './message.css'

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          odiokine
          <span className="message__timestamp">This is a timestamp</span>
        </h4>
        <p>This is a message</p>
      </div>
    </div>
  );
}

export default Message;
