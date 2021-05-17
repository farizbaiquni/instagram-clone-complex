import React, { useState } from 'react'
import PropTypes from 'prop-types'

function InputComment({commentInputRef}) {
    
    const[comment, setComment] = useState("")

    return (
        <form action="post" className="flex h-10">
            <input 
                type="text"
                ref={commentInputRef} 
                onChange={(event) => {event.preventDefault(), setComment(event.target.value)}}
                placeholder="Add a comment..."
                className="flex-1 border-gray-primary border-2 p-2"/>
            <button
                disabled
                > 
                Post 
            </button>
        </form>  
    
    )
}

InputComment.propTypes = {
    commentInputRef: PropTypes.string.isRequired,
}

export default InputComment
