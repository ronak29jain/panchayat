import React, { useState } from 'react'
import { IssueHandling } from '../../../context/IssueContext';

function Editissuemodal({id, text, image, closeModal}) {

  const { updateI } = IssueHandling();

  const [updatedtext, setUpdatedtext] = useState(text)
  const [updatedimgurl, setUpdatedimgurl] = useState(image)

  const updateissue = () => {
    try {
      updateI(id, updatedtext, updatedimgurl, closeModal);
    } catch (err) {
      console.log('this is the error from updateissue fn in the EditIssueModal.js:', err.message)
    }
  }

  return (
    <div onClick={closeModal} className='editissuemodal'>
      <div onClick={(e) => { e.stopPropagation() }} className="modal">
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