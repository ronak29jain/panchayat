import React from 'react'
// import React, {useState, useEffect} from 'react'
import './Feed.css'
import PostIssue from './Issue/PostIssue'
import Issue from './Issue/Issue';
// import db from './../../firebase';
// import {collection, getDocs} from "firebase/firestore";
import { IssueHandling } from '../../context/IssueContext';
import FlipMove from 'react-flip-move';

function Feed() {
  
  const { issues } = IssueHandling();
  // const [issues, setIssues] = useState([]);

  // useEffect(() => {
  //   const getIssues = async () => {
  //     const issuesCollectionRef = collection(db, "issues")
  //     const data = await getDocs(issuesCollectionRef);
  //     setIssues(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
  //   }
  //   getIssues();
  // })

  return (
    <div className='feed'>
      
      <div className='feed-header'>
        <h2 className='feed-home-button'>Home</h2>
      </div>
      
      <div className='post-issue'>
        <PostIssue/>
      </div>

      {/* Fetching and Adding Issues for Feed */}
      <FlipMove>
        {issues.map((issue) => {
          return (
            <div key={issue.id}> 
              <Issue 
                id={issue.id}
                avatar={issue.avatar}
                image={issue.image}
                name={issue.name}
                panch={issue.panch}
                sirpanch={issue.sirpanch}
                text={issue.text}
                username={issue.username}
                />
              </div>
            ) 
          })
        }
      </FlipMove>
    </div>
  )
}

export default Feed 