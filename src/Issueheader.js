import React from 'react'
import './Issueheader.css'

import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

function Issueheader(name, sirpanch, panch, username) {
  return (
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
  )
}

export default Issueheader;