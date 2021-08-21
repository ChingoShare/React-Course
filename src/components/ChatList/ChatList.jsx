import React from 'react';
import {List, ListSubheader} from "@material-ui/core";
import {Chat} from "../Chat/Chat";

const ChatList = ({chats}) => {
    return (
        <List>
            <ListSubheader>Чаты</ListSubheader>
            {chats.map((chat) =>
                <Chat chat={chat} key={chat.id} />
            )}
        </List>
    );
};

export {ChatList};