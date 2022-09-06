import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation';
// import { UserAuth } from '../context/Authcontext';

function Accounts() {

  // const { user } = UserAuth();

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default Accounts