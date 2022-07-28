import React from 'react'
// import React, {setState} from 'react'
import './PostIssue.css'
import {Avatar} from '@mui/material'
import { Button } from '@mui/material'


function PostIssue() {
  return (
    <div className='postIssue'>
      <form className='postIssue-form'>
        <div className='postIssue-content'>
          <Avatar src="/images/photo.jpg"/>
          {/* <Avatar src="photo.jpg"/> */}
          <input type="text" placeholder='Share Concern'></input>
        </div>
        <div className='postIssue-optionalContent'>
          <input type="type" placeholder='Optioanl: Add Image url'></input>
        </div>
      </form>
      <Button className='postIssue-postButton'>Issue</Button>
    </div>
  )
}

export default PostIssue