import React from 'react'
import './Discriptionimage.css'

function Discriptionimage({imgurl}) {
  
  const url = {imgurl}.imgurl
  console.log("discription image text:", url)
  if (url.length > 0) {
    return (
      <div className='image'>
        <img src={url} alt="discription1" />
      </div>
    )
  }else{
    return(
      <div></div>
    )
  }
}

export default Discriptionimage;