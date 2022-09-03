import React from 'react'
// import db from './../../../firebase';
// import {deleteDoc, doc} from "firebase/firestore";

import { IssueHandling } from '../../../context/IssueContext';

function DeleteIssueModal({id, closeModal}) {

  const { deleteI } = IssueHandling();

  const deleteissue = () => {
    try {
      deleteI(id, closeModal);
    } catch (err) {
      console.log('this is the error from deleteissue fn in the DeleteIssueModal.js:', err.message)
    }
  }

  // const deleteissue = async(id) => {
  //   const userDoc = doc(db, 'issues', id)
  //   await deleteDoc(userDoc)
  // }

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