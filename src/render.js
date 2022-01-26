import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNewPost } from './components/redux/state'


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addNewPost={addNewPost} />, document.getElementById('root1')
    )
}




