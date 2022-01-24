import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message} </div>
    )
}

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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
                <Message message={messagesData[2].message} id={messagesData[2].id} />
                <Message message={messagesData[3].message} id={messagesData[3].id} />
                <Message message={messagesData[4].message} id={messagesData[4].id} />
                <Message message={messagesData[5].message} id={messagesData[5].id} />
                <Message message={messagesData[6].message} id={messagesData[6].id} />
            </div>
        </div>
    )

}

export default Dialogs