import React from 'react';
import "./Message.css"

const Message = ({message}) => {

    return (
        <div className={"msg"}>
            <div className={"msg-author"}>{message.author}:</div>
            <p className={"msg-text"}>{message.text}</p>
        </div>
    );
};

export {Message};