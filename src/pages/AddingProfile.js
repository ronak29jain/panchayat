import React, { useState } from 'react'
import { UserAuth } from '../context/Authcontext';
import { Navigate, useNavigate } from 'react-router-dom';

function AddingProfile() {
  
  const { user, googleSignOut, addName, emailverification } = UserAuth();
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  // const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signOut = async() => {
    try {
      await googleSignOut();
    } catch (err) {
      console.log('Error During Log Out (AddingProfile.js)', err)
    }
  }
  
  const add = async() => {
    setError('')
    try {
      if (displayName.length >= 3) {
        await addName(displayName, photoURL)
          // .then(() => {
        await emailverification()
          .then(() => {
            alert("Verify Your Email and Login Again")
            signOut();
            navigate('/accounts/signin')
        });
      } else {
        throw "Name Should be at least of at least 3 letters.";
      }
      // alert("Verify Your Email and Login Again")
    } catch (err) {
      console.log('Error During updaing Name (AddingProfile.js): ', err)
      setError(err)
    }
  }

  const sendVerificationEmail = async() => {
    try {
      await emailverification();
      // alert("Verify Your Email and Login Again")
      signOut();
    } catch (err) {
      console.log('Error During sending verification email (AddingProfile.js)', err)
    }
  }

  if (user?.displayName && user?.emailVerified) {
    return <Navigate to='/user' />
  }

  if (user?.displayName) {
    return (
      <div>
        <h1>Hello, {user.displayName} </h1>
        <h1>Please Verify your Email Address: {user.email} </h1>
        <h3>If already verified, please login again</h3>
        <button onClick={signOut} className='btn-submit'> Logout </button>
        <button onClick={sendVerificationEmail} className='btn-submit'> Send Email Again </button>
      </div>
    )
  }

  return (
    <div className='adding-profile center'>
      <div className='signin-form fieldset center'>
        <div>
          <legend className="legend">Add Details</legend>

          <div className="input-section">
            <label className="label">Name<sup>*</sup></label>
            <input type="text" className='input'
              value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
          </div>

          <div className="input-section">
            <label className="label">Profile Photo URL</label>
            <input type="text" className='input' 
              value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
          </div>

          {/* <div className="input-section">
            <label className="label">username</label>
            <input type="text" className='input' 
              value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div> */}
          <h5 className='error'>{error}</h5>
          <button onClick={add} className='submit'> Add Details</button>
        </div>
      </div>
    </div>
  )
}

export default AddingProfile