import React from 'react'
import { UserAuth } from '../context/Authcontext'
import { Navigate } from 'react-router-dom'


function Protected({children}) {
  const { user } = UserAuth();
  if (!(user?.email)) {
    return <Navigate to='/accounts/signin' />;
  }
  return children;
}

export default Protected