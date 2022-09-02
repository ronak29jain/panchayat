import React, { forwardRef, useState,  } from 'react'
import Avatar from '@mui/material/Avatar'
import './Issue.css'
import './Modal.css'
import Discriptionimage from './Discriptionimage';
import Editissuemodal from './Editissuemodal';
import DeleteIssueModal from './DeleteIssueModal';

import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Issue = forwardRef(({id, avatar, image, name, username, sirpanch, panch, text}, ref) => {
  
  const [displayOption, setDisplayOption] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  
  const displayPopUp = async(id, modalname) => {
    setDisplayOption(!displayOption)
    if (modalname === 'edit') {
      setOpenEditModal(true)
    }
    else if (modalname === 'delete') {
      setOpenDeleteModal(true)
    }
  }

  return (
    <div className="issue" ref={ref}>

      <div className='issue-avatar'>
        <Avatar src={avatar}/>
      </div>
      
      <div className='issue-body'>
        <div className='issue-head'>
          <div className='issue-header'>
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
                <div onClick={() => displayPopUp(id,'edit')}>Edit</div>
                <div onClick={() => displayPopUp(id,'delete')}>Delete</div>
              </div>
            }
          </div>
        </div>
        
        <div className='issue-head-discription'>
          {text}
        </div>
        
        <Discriptionimage imgurl={image}/>
        
        <div className="issue-footer">
          <FavoriteBorderOutlinedIcon/>
          <ChatOutlinedIcon/>
          <IosShareOutlinedIcon/>
        </div>
      </div>

      {openEditModal && <Editissuemodal id={id} text={text} image={image} closeModal={() => setOpenEditModal(false)}/> }
      {openDeleteModal && <DeleteIssueModal id={id} closeModal={() => setOpenDeleteModal(false)}/> }
    </div>
  );
});

export default Issue