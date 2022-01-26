import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { addPost } from './components/redux/state';

// addPost('dd')
function App(props) {

  return (
    <BrowserRouter>

      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
            <Route exact path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path= '/friends' element={<Friends/>}/>
          </Routes>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
