import React from 'react'
import './Navigation.css'
// import { UserAuth } from '../../context/Authcontext';
import { Link } from 'react-router-dom';

function Navigation() {
  
  // const { googleSignOut } = UserAuth();

  // const signOut = async() => {
  //   try {
  //     await googleSignOut()
  //       .then(() => {});
  //   } catch (err) {
  //     console.log('Error During Log Out (Navigation.js)', err)
  //   }
  // }

  // const deleteAcc = async() => {
  //   try {
  //     const deleteEmail = prompt("To delete your Account, Please enter your email address. Please remember once deleted it cann't be recovered.")
  //     if (deleteEmail.toLowerCase() === user.email.toLowerCase()){
  //       await deleteAccount();
  //       console.log("account deleted")
  //       alert('account deleted')
  //     }
  //     else {
  //       console.log("your email address does not match")
  //       alert('your email address does not match')
  //     }
  //   } catch (err) {
  //     console.log('error in deleting the account from deleteAccount function (Navigation.js): ', err)
  //   }
  // }

  return (
    <nav className='navigation'>
      <div className="nav">
        <div className="user-loged-out">
          <Link to="/accounts/signin" className='link'> Sign-In </Link>
          <Link to="/accounts/signup" className='link'> Create Account </Link>
        </div>
        {/* {
          (user) 
            ? <div className="user-loged-in">
                <Link to="/home" className='link'>Home</Link>
                <Link to="/user-profile" className='link'>Profile</Link>
                <Link to="/signin" onClick={signOut} className='link'>Sign Out</Link>
              </div>
            : <div className="user-loged-out">
                <Link to="/" className='link'>Home</Link>
                <Link to="/signin" className='link'>Signin</Link>
                <Link to="/register" className='link'>Register</Link>
              </div>
        } */}
      </div>
    </nav>
  )
}

export default Navigation