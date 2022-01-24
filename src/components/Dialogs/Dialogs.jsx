import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsData = [
        { id: 'Polay', name: 'Polay' },
        { id: 'Tom', name: 'Tom' },
        { id: 'Bill', name: 'Bill' },
        { id: 'Kate', name: 'Kate' },
        { id: 'Alex', name: 'Alex' },
        { id: 'Ron', name: 'Ron' },
        { id: 'Kara', name: 'Kara' }
    ]

    let messagesData = [
        { id: 1, message: 'What up?' },
        { id: 2, message: 'What are you doing?' },
        { id: 3, message: 'Come on' },
        { id: 4, message: 'Greate' },
        { id: 5, message: 'Please' },
        { id: 6, message: 'Buy' },
        { id: 7, message: 'React' }
    ]

    let dialogsElements = dialogsData.map(dialog => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} />
        )

    })

    let messagesElements = messagesData.map(m => {
        return (
            <Message message={m.message} id={m.id} />
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs