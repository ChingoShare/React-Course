import React from 'react';
import {Message} from "../Message/Message";
import "./MessageList.css"

const MessageList = ({messages, ...props}) => {

    return (
        <div className={"msg-list"}>
            <div>
                <h1 style={{textAlign: "center"}}>Сообщения</h1>
                {messages.map(message =>
                    <Message message={message} key={message.id}/>
                )}
            </div>
        </div>
    );
};

export {MessageList};