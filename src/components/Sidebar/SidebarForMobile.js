import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';

import PentagonIcon from '@mui/icons-material/Pentagon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from '@mui/material';

function SidebarForMobile() {
  return (
    <div className='sidebarformobile'>
      {/* Panchayat Icon */}
      <PentagonIcon className='panchayat_icon'/>

      {/* Sidebar Option Icons */}
      <SidebarOption active Icon={HomeOutlinedIcon} />
      <SidebarOption Icon={TagIcon} text=''/>
      <SidebarOption Icon={NotificationsActiveOutlinedIcon} text=''/>
      <SidebarOption Icon={EmailOutlinedIcon} text=''/>
      <SidebarOption Icon={BookmarkAddedOutlinedIcon} text=''/>
      <SidebarOption Icon={ClearAllOutlinedIcon} text=''/>
      <SidebarOption Icon={PermIdentityOutlinedIcon} text=""/>
      <SidebarOption Icon={MoreHorizOutlinedIcon} text=""/>

      {/* Button - Issue */}
      <Button varient="Outlined" className='sidebar_issue'>I</Button>
    </div>
  )
}

export default SidebarForMobile