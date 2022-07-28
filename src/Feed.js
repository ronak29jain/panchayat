import React, {useState, useEffect} from 'react'
import './Feed.css'
import PostIssue from './PostIssue'
import Issue from './Issue';
import db from './firebase';
import {collection, getDocs} from "firebase/firestore";

function Feed() {
  
  const [issues, setIssues] = useState([]);
  const [bool, setBool] = useState(true)

  useEffect(() => {
    const getIssues = async () => {
      const issuesCollectionRef = collection(db, "issues")
      const data = await getDocs(issuesCollectionRef);
      setIssues(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
    }
    getIssues();
  },[bool])

  return (
    <div className='feed'>
      
      <div className='feed-header'>
        <h2 className='feed-home-button'>Home</h2>
      </div>
      
      <div className='post-issue'>
        <PostIssue bool={bool} setBool={setBool} />
      </div>

      {/* Fetching and Adding Issues for Feed */}
      {issues.map((issue) => {
          return (
            <div key={issue.id}> 
              <Issue 
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

    </div>
  )
}

export default Feed 