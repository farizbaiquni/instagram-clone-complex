import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4} from 'uuid'
import { firebase, fieldValue } from '../../lib/firebase'

function InputComment({photoId, commentInputRef, setComments, authUsername: displayName, comments}) {
    
    const[comment, setComment] = useState("")

    const handlePostComment = async() => {
        let idComment = uuidv4()
        setComments([{idComment, displayName, comment}, ...comments])

        await firebase.firestore().collection('photos').doc(photoId).update({
            comments: fieldValue.arrayUnion({
                id: idComment,
                comment: comment,
                displayName: displayName
            })
        })

        setComment("")
    }

    return (
        <>
        <hr className="h-1 border-gray-primary mt-2"/>
        <form 
            action="post" 
            className="flex h-10" 
            onSubmit={(event) => { 
                event.preventDefault(),
                handlePostComment()
            }}
        >
            <input 
                type="text"
                ref={commentInputRef} 
                value={comment}
                onChange={(event) => {event.preventDefault(), setComment(event.target.value)}}
                placeholder="Add a comment..."
                className="flex-1 border-0 p-2 focus:outline-none"/>
            <button
                type="submit"
                disabled={comment.length <= 0}
                className={`font-bold px-1 text-blue-post ${comment.length <= 0  ? `opacity-50` : `opacity-100` }`}
                > 
                Post 
            </button>
        </form>  
        </>
    )
}

InputComment.propTypes = {
    photoId: PropTypes.string.isRequired,
    commentInputRef: PropTypes.object.isRequired,
    setComments: PropTypes.func.isRequired,
    authUsername: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
}

export default InputComment
