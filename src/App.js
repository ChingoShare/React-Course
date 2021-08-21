import React, {useState} from "react";
import "./App.css"
import {MessageList} from "./components/MessageList/MessageList";
import {MessageForm} from "./components/MessageForm/MessageForm";
import {useAddMessage} from "./hooks/useAddMessage";
import {useBotMessage} from "./hooks/useBotMessage";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {ChatList} from "./components/ChatList/ChatList";
import {Grid} from "@material-ui/core";

function App() {
    const user = "Вы"
    const bot = "Бот"
    const [messages, setMessages] = useState([])
    const [message, setMessage, onSubmit] = useAddMessage(user, messages, setMessages)
    useBotMessage(bot, user, messages, setMessages)
    const chats = [{name: "Чат 1", id: 0}, {name: "Чат 2", id: 1}, {name: "Чат 3", id: 2}]

    const theme = createTheme({
        palette: {
            primary: {
                main: "#FF9800",
            },
            secondary: {
                main: "#0098FF",
            },
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <Grid container className="App">
                <Grid xs={3} item>
                    <ChatList chats={chats}/>
                </Grid>
                <Grid xs={6} item className="chat-block">
                    <MessageList messages={messages}/>
                    <MessageForm onSubmit={onSubmit} message={message} setMessage={setMessage}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
