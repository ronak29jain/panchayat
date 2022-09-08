import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { NavLink } from 'react-router-dom';
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
import { UserAuth } from '../../context/Authcontext';

function Sidebar() {
  
  const { googleSignOut } = UserAuth();

  const signOut = async() => {
    try {
      await googleSignOut()
        .then(() => {});
    } catch (err) {
      console.log('Error During Log Out (Navigation.js)', err)
    }
  }

  return (
    <div className='sidebar'>
      {/* Panchayat Icon */}
      <PentagonIcon className='panchayat_icon'/>

      {/* Sidebar Option Icons */}
      <NavLink to='/user/feed' className='nav-link'>
        <SidebarOption Icon={HomeOutlinedIcon} text='Home'/>
      </NavLink>
      <NavLink to='/user/profile' className='nav-link'>
        <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile"/>
      </NavLink>
      <SidebarOption Icon={TagIcon} text='Explore'/>
      <SidebarOption Icon={NotificationsActiveOutlinedIcon} text='Notification'/>
      <SidebarOption Icon={EmailOutlinedIcon} text='Message'/>
      <SidebarOption Icon={BookmarkAddedOutlinedIcon} text='Bookmark'/>
      <SidebarOption Icon={ClearAllOutlinedIcon} text='List'/>
      <SidebarOption Icon={MoreHorizOutlinedIcon} text="More"/>

      {/* Button - Issue */}
      <Button onClick={signOut} varient="Outlined" className='sidebar_issue' fullWidth>Log Out</Button>
    </div>
  )
}

export default Sidebar