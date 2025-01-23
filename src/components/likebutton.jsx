import React from 'react'
import {Heart} from 'lucide-react'

function Likebutton({
    isLiked,
}) {
  return (
    <div>
        <Heart style = {{fill : isLiked ? 'red' :'none',color :"white"}}/>
        
      
    </div>
  )
}

export default Likebutton
