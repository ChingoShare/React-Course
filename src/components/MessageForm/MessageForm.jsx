import React from 'react';
import {MyInput} from "../UI/input/MyInput";
import {MyButton} from "../UI/button/MyButton";

const MessageForm = ({onSubmit, message, setMessage}) => {
    return (
        <form onSubmit={onSubmit}>
            <MyInput
                value={message.text}
                onChange={e => setMessage({...message, text: e.target.value})}
                type="text"
                placeholder="Сообщение"/>
            <MyButton>Отправить</MyButton>
        </form>
    );
};

export {MessageForm};