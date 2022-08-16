// import { async } from '@firebase/util'
import React, { useState } from 'react'
import './Editissuemodal.css'
import db from './firebase';
import {updateDoc, doc} from "firebase/firestore";

function Editissuemodal({id, text, image, popup, closeModal}) {
  
  const [updatedtext, setUpdatedtext] = useState(text)
  const [updatedimgurl, setUpdatedimgurl] = useState(image)
  
  const updateissue = async(id) => {
    console.log(updatedtext)
    console.log(updatedimgurl)
    
    const userDoc = doc(db, 'issues', id)
    const updatedfield = {
      text: updatedtext,
      image: updatedimgurl
    }
    await updateDoc(userDoc, updatedfield)
    
    // setUpdatedtext('')
    // setUpdatedimgurl('')
    closeModal();
  }


  // if (!popup) return null;
  return (
    <div className='editissuemodal'>
      <div className="modal">
        <div className="close-btn btn">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="content">
          <h2>Edit Issue</h2>
          <input type="text" value={updatedtext} onChange={(e) => setUpdatedtext(e.target.value)} placeholder='Enter Text'/>
          <input type="text" value={updatedimgurl} onChange={(e) => setUpdatedimgurl(e.target.value)} placeholder='Enter Imgae Url'/>
        </div>
        <div className="update-btn btn">
          <button onClick={() => updateissue(id)}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default Editissuemodal