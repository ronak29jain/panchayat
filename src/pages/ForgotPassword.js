import React, { useState } from 'react'
import { UserAuth } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {

  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const { getLinkForResettingPassword } = UserAuth()
  const navigate = useNavigate();

  const sendLink = async() => {
    setEmailErr('')
    try {
      await getLinkForResettingPassword(email)
      .then(() => {
        console.log('reset password link send');
        alert('Your reset password link has been send to your email address. Please check your account');
        navigate("/accounts/signin");
      });
    } catch (err) {
      console.log('error in sending the "forgot password" link: ', err.message)
      setEmailErr(err.message)
    }
  }

  return (
    <div className='forgot-password center'>
      <article className="signin-form center">
          <div>
            <fieldset className="fieldset">
              <legend className="legend">Forgot Password</legend>
              <div className="input-section">
                <label className="label" htmlFor="email-address">Email</label>
                <input className="input" type="email" name="email-address"  id="email-address" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <h5 className='error'>{emailErr}</h5>
            </fieldset>
            <div className="">
              <input onClick={sendLink} className="submit" type="submit" value="Send Login Link"/>
            </div>
            
          </div>
      </article>
    </div>
  )
}

export default ForgotPassword