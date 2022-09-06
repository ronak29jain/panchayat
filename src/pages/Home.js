import React from 'react'
import './../components/Home.css'
import './../components/login.css'
import { UserAuth } from '../context/Authcontext'
import { Navigate, Outlet } from 'react-router-dom';
import { IssueContextProvider } from './../context/IssueContext';
import Sidebar from '../components/Sidebar/Sidebar';
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
        <Sidebar />
        <div className='feed'>
          <Outlet />
        </div>
        <Widgets />
      </IssueContextProvider>
    </div>
  )
}

export default Home