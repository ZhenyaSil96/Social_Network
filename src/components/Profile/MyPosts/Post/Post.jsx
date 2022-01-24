import React from "react";
import classes from './Post.module.css'

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517" />
      {props.message}

      <div>
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post