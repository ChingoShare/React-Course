import React from 'react';
import {ListItem} from "@material-ui/core";
import {number, shape, string} from 'prop-types';

const Chat = ({chat}) => {
    return (
        <ListItem divider button>
            {chat.name}
        </ListItem>
    );
};

Chat.propTypes = {
    chat: shape({
        name: string.isRequired,
        id: number.isRequired
    }).isRequired
}

export {Chat};