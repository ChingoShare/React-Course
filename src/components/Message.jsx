import React from 'react';
import "../styles/Message.css"

const Message = (props) => {

    return (
        <div className={"msg"}>

            <p className={"msg-content"}>{props.msg}</p>
        </div>
    );
};

export {Message};