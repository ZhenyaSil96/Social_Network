import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { addNewPost } from "../../redux/state";
import { state } from "../../redux/state";
import { render } from "react-dom";
import { rerenderEntireTree } from "../../../render";

const MyPosts = (props) => {

  let newPostElement = React.createRef()

  let addPost = () => {
    addNewPost(newPostElement.current.value)
  }


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
          <textarea ref={newPostElement}></textarea>
        </div>
        <div className={classes.buttonAdd}>
          <button onClick={addPost} >Add</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts