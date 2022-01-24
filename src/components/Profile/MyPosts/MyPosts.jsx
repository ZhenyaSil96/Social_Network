import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

  let postsData = [
    { message: 'Hello , how are you', likesCount: 'Likes = 11' },
    { message: 'It is my first post', likesCount: 'Likes= 5' }
  ]
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div className={classes.postsTextArea}>
          <textarea></textarea>
        </div>
        <div className={classes.buttonAdd}>
          <button>Add</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
      </div>
    </div>
  )
}

export default MyPosts