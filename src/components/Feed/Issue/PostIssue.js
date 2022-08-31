// import React from 'react'
import React, {useState} from 'react'
import './PostIssue.css'
import {Avatar} from '@mui/material'
import { Button } from '@mui/material'
import db from './../../../firebase';
import {collection, addDoc} from "firebase/firestore";


function PostIssue() {

  const [text, setText] = useState("")
  const [image, setImage] = useState("")

  const postissue = async() => {
    const issuesConllectionRef = collection(db, "issues")
    await addDoc(issuesConllectionRef, {
      avatar: "/images/photo.jpg",
      image: image,
      name: "Ronak Jain",
      panch: false,
      sirpanch: true, 
      text: text,
      username: "ronak29jain"
    })
    setText("");
    setImage("");
  }

  return (
    <div className='postIssue'>
      <form className='postIssue-form'>
        <div className='postIssue-content'>
          <Avatar src="/images/photo.jpg"/>
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