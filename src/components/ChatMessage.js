import React from 'react';

import './ChatMessage.css';


function SentMessage(props) {
    return (

        <div className="sent-cont">
            <p className="sent">{props.message}</p>
        </div>
    )
}

function ReceivedMessage(props) {
    return (
        <div className="chat-message">


            <img className="avatar" src={props.img} alt="avatar" srcSet="" />

            <div className="msg-container">
                <p className="msg-name">{props.name}</p>
                <p className="received">{props.message}</p>
            </div>


        </div>

    )
}

function ChatMessage(props) {
    if (props.messageType === "sent") {
        return <SentMessage message={props.message} />
    } else {

        return <ReceivedMessage message={props.message} img={props.img} name={props.name} />

    }
}

export default ChatMessage; 