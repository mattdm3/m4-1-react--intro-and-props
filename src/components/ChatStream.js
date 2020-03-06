import React from 'react';

import './ChatStream.css';

import ChatMessage from './ChatMessage'

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {
  return (

    <section className="chat-stream">

      {props.messages.map(message => {

        const messageType = (message.user === props.currentUser) ? "sent" : "received";

        return <ChatMessage
          key={message.id}
          img={message.user.avatar}
          message={message.body}
          name={message.user.username}
          messageType={messageType} />
      })
      }


    </section>
  );
}

export default ChatStream;
