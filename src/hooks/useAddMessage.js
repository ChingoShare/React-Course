import {useState} from 'react';

const useAddMessage = (user, messages, setMessages) => {
    const [message, setMessage] = useState({text: "", author: user, id: 0})
    const onSubmit = (e) => {
        e.preventDefault()
        setMessages([...messages, {...message, id: Date.now()}])
        setMessage({...message, text: ""})
    }

    return [message, setMessage, onSubmit]
}

export {useAddMessage}