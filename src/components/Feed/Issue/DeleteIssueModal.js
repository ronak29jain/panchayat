import React from 'react'
import db from './../../../firebase';
import {deleteDoc, doc} from "firebase/firestore";

function DeleteIssueModal({id, closeModal}) {

  const deleteissue = async(id) => {
    const userDoc = doc(db, 'issues', id)
    await deleteDoc(userDoc)
  }

  return (
    <div className='editissuemodal'>
      <div className="modal">
        <div className="close-btn btn">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="content">
          <h2>Delete Issue</h2>
          <h3> Are you sure you want to delete this Issue.</h3>
        </div>
        <div className="update-btn btn">
          <button onClick={() => deleteissue(id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteIssueModal