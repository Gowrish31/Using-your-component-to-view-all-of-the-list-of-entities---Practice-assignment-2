import React from 'react'
import Likebutton from './likebutton'

function Postcard({
    profileImage,
    isLiked,
    username,
    content,
}) {
  return (
    <div>

        <img style={{height:300}}src={profileImage}/>

        <Likebutton
        isLiked={isLiked}/>

        <p style={{color:"blue"}}>{username}</p>      
        <p style={{color:"blue"}}>{content}</p>      
    </div>
  )
}

export default Postcard
