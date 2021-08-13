import React, {useState} from "react";
import {Message} from "./components/Message";
import "./styles/App.css"

function App() {
    const [text, /*setText*/] = useState('Привет, Мир!')

    return (
        <div className="App">
            <Message msg={text}/>
        </div>
    );
}

export default App;
