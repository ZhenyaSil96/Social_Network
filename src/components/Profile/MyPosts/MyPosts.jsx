import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  

  let postsElements = props.postsData.map(m => {
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