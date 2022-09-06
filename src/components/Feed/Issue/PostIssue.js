import React, {useEffect, useState} from 'react'
import './PostIssue.css'
import {Avatar} from '@mui/material'
import { Button } from '@mui/material'
import { IssueHandling } from '../../../context/IssueContext';
import { UserAuth } from '../../../context/Authcontext';

function PostIssue() {

  const { user } = UserAuth();

  const { addI } = IssueHandling();

  const [text, setText] = useState("")
  const [image, setImage] = useState("")
  // const [avatarURL, setAvatarURL] = useState("")

  const postissue = () => {
    try {
      addI(text, setText, image, setImage);
    } catch (err) {
      console.log("This is a error from postissue fn in PostIssue.js: ", err.message)
    }
  }

  // useEffect(() => {
  //   if (user.photoURL) {
  //     setAvatarURL(user.photoURL)
  //   }
  //   else { setAvatarURL("/Images/default_profile_image.png") }
  // },[])

  return (
    <div className='postIssue'>
      <form className='postIssue-form'>
        <div className='postIssue-content'>
          <Avatar src={user.photoURL}/>
          <input value={text} type="text" placeholder='Share Concern'
            onChange={(event) => setText(event.target.value)}>
          </input>
        </div>
        <div className='postIssue-optionalContent'>
          <input value={image} type="type" placeholder='Optioanl: Add Image url'
            onChange={(event) => setImage(event.target.value)}>
          </input>
        </div>
      </form>
      <Button onClick={postissue} className='postIssue-postButton'>Issue</Button>
    </div>
  )
}

export default PostIssue;