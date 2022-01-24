import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

  let postsData = [
    { message: 'Hello , how are you', likesCount: 'Likes = 11' },
    { message: 'It is my first post', likesCount: 'Likes= 5' }
  ]

  let postsElements = postsData.map(m => {
    return (
      <Post message={m.message} likesCount={m.likesCount} />
    )
  })
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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts