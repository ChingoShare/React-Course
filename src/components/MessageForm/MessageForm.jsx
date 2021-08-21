import {Button, Icon, TextField} from "@material-ui/core";

const MessageForm = ({onSubmit, message, setMessage}) => {
    return (
        <form onSubmit={onSubmit}>
            <TextField
                inputRef={input => input?.focus()}
                multiline
                fullWidth
                color="secondary"
                value={message.text}
                onChange={e => setMessage({...message, text: e.target.value})}
                label="Сообщение..."
                variant="outlined"
                />

            <Button type="submit" variant="contained" color="secondary" endIcon={<Icon>send</Icon>}>
                Отправить
            </Button>
        </form>
    );
};

export {MessageForm};