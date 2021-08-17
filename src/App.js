import React, {useState} from "react";
import "./App.css"
import {MessageList} from "./components/MessageList/MessageList";
import {MessageForm} from "./components/MessageForm/MessageForm";
import {useAddMessage} from "./hooks/useAddMessage";
import {useBotMessage} from "./hooks/useBotMessage";

function App() {
    const [messages, setMessages] = useState([])

    const user = "Вы"
    const bot = "Бот"

    const [message, setMessage, onSubmit] = useAddMessage(user, messages, setMessages)
    useBotMessage(bot, user, messages, setMessages)

    return (
        <div className="App">
            <MessageList messages={messages}/>
            <MessageForm onSubmit={onSubmit} message={message} setMessage={setMessage}/>
        </div>
    );
}

export default App;
