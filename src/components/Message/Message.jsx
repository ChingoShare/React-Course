import React from 'react';
import "./Message.css"
import {number, shape, string} from "prop-types";
import {Chat} from "../Chat/Chat";

const Message = ({message}) => {

    return (
        <div className={"msg"}>
            <div className={"msg-author"}>{message.author}:</div>
            <p className={"msg-text"}>{message.text}</p>
        </div>
    );
}

Chat.propTypes = {
    chat: shape({
        author: string.isRequired,
        name: string.isRequired,
        id: number.isRequired
    }).isRequired
}

export {Message};