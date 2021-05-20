import React, {useState} from 'react'
import PropTypes from 'prop-types'
import InputComment from'./InputComment'
import { formatDistance } from 'date-fns'

function Comments({photoId, commentsPost, commentInputRef, dateCreated, authUsername}) {

    const[comments, setComments] = useState(commentsPost) 
    const[totalComments, setTotalComments] = useState(3)

    return (
        <div className="post__commnets p-2 text-sm">
            {
                comments.length > 3 && (
                    <p 
                        className={`text-gray-text cursor-pointer ${totalComments <= 3 ? `block` : `hidden`}`}
                        onClick={() => setTotalComments(comments.length - 1)}
                    >View all {comments.length} comments</p>
                )
            }

            {
                 comments.slice(0, totalComments).map(item => (
                    <p  key={item.id}> <b>{item.displayName}</b> {item.comment}</p>
                    ))
            }
            <p className="my-1 text-xs text-gray-text">{formatDistance(dateCreated, new Date())} ago</p>
            <InputComment photoId={photoId} commentInputRef={commentInputRef} setComments={setComments} authUsername={authUsername} comments={comments}/>
        </div>
    )
}

Comments.propTypes = {
    photoId: PropTypes.string.isRequired,
    commentsPost: PropTypes.array.isRequired,
    commentInputRef: PropTypes.object.isRequired,
    dateCreated: PropTypes.number.isRequired,
    authUsername: PropTypes.string.isRequired
}

export default Comments
