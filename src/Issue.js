import React, { forwardRef, useState,  } from 'react'
import Avatar from '@mui/material/Avatar'
import './Issue.css'
// import Issueheader from './Issueheader';
import Discriptionimage from './Discriptionimage';
import Editissuemodal from './Editissuemodal';
import db from './firebase';
import {deleteDoc, doc} from "firebase/firestore";


import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { async } from '@firebase/util';


const Issue = forwardRef(({id, avatar, image, name, username, sirpanch, panch, text}, ref) => {
  
  const [displayOption, setDisplayOption] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const deleteissue = async(id) => {
    setDisplayOption(!displayOption)
    const userDoc = doc(db, 'issues', id)
    await deleteDoc(userDoc)
  }
  
  const displaypopup = async(id) => {
    setDisplayOption(!displayOption)
    setOpenModal(true)
    // const userDoc = doc(db, 'issues', id)  

  }

  // const editissue = () => {
  //   setOpenModal(false)
  // }
  
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

          <div className="option">
            <div className="option-btn">
            <MoreVertIcon onClick={(e) => setDisplayOption(!displayOption)}/>
            </div>

            {displayOption &&
              <div className="option-fn">
                <div onClick={() => displaypopup(id)}>Edit</div>
                <div onClick={() => deleteissue(id)}>Delete</div>
              </div>
            }

          </div>
        </div>
        
        <div className='issue-head-discription'>
          {text}
        </div>
        
        <Discriptionimage imgurl={image}/>

        {/* <img src={image} alt="discription"/> */}
        
        <div className="issue-footer">
          <FavoriteBorderOutlinedIcon/>
          <ChatOutlinedIcon/>
          <IosShareOutlinedIcon/>
        </div>
      </div>

      {/* {editPopUp &&       
        <div className="editpopup">
          <h3>Hello World</h3>
          <button onClick={editissue}>close</button>
        </div>
      } */}

      {openModal && <Editissuemodal id={id} text={text} image={image} popup={openModal} closeModal={() => setOpenModal(false)}/> }
    </div>
  );
});

export default Issue