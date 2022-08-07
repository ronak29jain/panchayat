import React, { forwardRef } from 'react'
import Avatar from '@mui/material/Avatar'
import './Issue.css'
// import Issueheader from './Issueheader';
import Discriptionimage from './Discriptionimage';


import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';


const Issue = forwardRef(({avatar, image, name, username, sirpanch, panch, text}, ref) => {
  return (
    <div className="issue" ref={ref}>

      <div className='issue-avatar'>
        <Avatar src={avatar}/>
      </div>
      
      <div className='issue-body'>
        <div className='issue-head'>
          <div className='issue-header'>
            {/* <Issueheader name={name} username={username} sirpanch={sirpanch} panch={panch}/> */}
            <h3>
              {name}{" "}
              <span className='issue-username'>
                {sirpanch && <WorkspacePremiumOutlinedIcon className='issue-batch'/>}
                {panch && <VerifiedOutlinedIcon className='issue-batch'/>}
                {" "}@{username}
              </span>
            </h3>
          </div>
          
          <div className='issue-head-discription'>
            {text}
          </div>
          
        </div>
        
        <Discriptionimage imgurl={image}/>

        {/* <img src={image} alt="discription"/> */}
        
        <div className="issue-footer">
          <FavoriteBorderOutlinedIcon/>
          <ChatOutlinedIcon/>
          <IosShareOutlinedIcon/>
        </div>
      </div>

    </div>
  );
});

export default Issue