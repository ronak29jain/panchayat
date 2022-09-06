import React from 'react'
import './../components/Feed/Feed.css'
import PostIssue from '../components/Feed/Issue/PostIssue';
import Issue from '../components/Feed/Issue/Issue';
import { IssueHandling } from '../context/IssueContext';
import FlipMove from 'react-flip-move';
import { UserAuth } from '../context/Authcontext';

function Feed() {
  
  const { issues } = IssueHandling();
  const { user } = UserAuth();

  return (
    <div className='feed'>
      
      <div className='feed-header'>
        <h2 className='feed-home-button'>Home</h2>
        <h4>Welcome, {user.displayName}</h4>
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
                // panch={issue.panch}
                sirpanch={issue.sirpanch}
                text={issue.text}
                username={issue.username}
                email={issue.email}
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