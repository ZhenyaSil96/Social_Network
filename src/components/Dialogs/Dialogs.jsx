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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Polay' id='Polay' />
                <DialogItem name='Tom' id='Tom' />
                <DialogItem name='Bill' id='Bill' />
                <DialogItem name='Kate' id='Kate' />
                <DialogItem name='Alex' id='Alex' />
                <DialogItem name='Ron' id='Ron' />
                <DialogItem name='Kara' id='Kara' />
            </div>
            <div className={classes.messages}>
                <Message message='What up?' />
                <Message message='What are you doing?' />
                <Message message='Come on' />
                <Message message='Greate' />
            </div>
        </div>
    )

}

export default Dialogs