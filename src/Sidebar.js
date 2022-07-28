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


function Sidebar() {
  return (
    <div className='sidebar'>

      {/* Panchayat Icon */}
      <PentagonIcon className='panchayat_icon'/>

      {/* Sidebar  option*/}
      <SidebarOption active Icon={HomeOutlinedIcon} text='Home'/>

      {/* Sidebar  option*/}
      <SidebarOption Icon={TagIcon} text='Explore'/>

      {/* Sidebar  option*/}
      <SidebarOption Icon={NotificationsActiveOutlinedIcon} text='Notification'/>

      {/* Sidebar  option*/}
      <SidebarOption Icon={EmailOutlinedIcon} text='Message'/>

      {/* Sidebar  option*/}
      <SidebarOption Icon={BookmarkAddedOutlinedIcon} text='Bookmark'/>

      {/* Sidebar  option*/}
      <SidebarOption Icon={ClearAllOutlinedIcon} text='List'/>

      {/* Sidebar  option*/}
      <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile"/>

      {/* Sidebar  option*/}
      <SidebarOption Icon={MoreHorizOutlinedIcon} text="More"/>

      {/* Button - Issue */}
      <Button varient="Outlined" className='sidebar_tweet' fullWidth>Tweet</Button>

    </div>
  )
}

export default Sidebar