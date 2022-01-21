import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hello , how are you' col='10' />
        <Post message="It's my first post" col='5' />
      </div>
    </div>
  )
}

export default MyPosts