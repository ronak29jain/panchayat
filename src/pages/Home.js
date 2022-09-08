import React from 'react'
// import './../components/Home.css'
import './../Style/Home.css'
// import './../components/login.css'
import { UserAuth } from '../context/Authcontext'
import { Navigate, Outlet } from 'react-router-dom';
import { IssueContextProvider } from './../context/IssueContext';
import Sidebar from '../components/Sidebar/Sidebar';
import SidebarForMobile from '../components/Sidebar/SidebarForMobile';
import Widgets from '../components/Widgets/Widgets';

function Home() {

  const { user } = UserAuth();

  if (!(user?.email)) { 
    return <Navigate to='/accounts/signin' />
  }

  if (!((user?.displayName) && (user?.emailVerified))) {
    // alert('Please Enter the User Details')
    return <Navigate to='/add-profile' />
  }

  return (
    <div className="home">
      <IssueContextProvider>
        <Sidebar className='sidebar'/>
        <SidebarForMobile className='sidebarformobile'/>
        <div className='feed'>
          <Outlet />
        </div>
        <Widgets className='widgets'/>
      </IssueContextProvider>
    </div>
  )
}

export default Home