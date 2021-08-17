import {useEffect, useRef} from 'react';

const useBotMessage = (bot, user, messages, setMessages) => {
    const mount = useRef(false)
    useEffect(() => {
        if (mount.current) {
            if (messages[messages.length - 1].author === user) {
                setTimeout(() => {
                    setMessages([...messages, {
                        id: Date.now(),
                        text: "Привет",
                        author: bot,
                    }])
                }, 1500)
            }
        } else {
            mount.current = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])
}

export {useBotMessage}