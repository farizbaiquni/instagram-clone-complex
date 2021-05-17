import React from 'react'
import PropTypes from 'prop-types'
import InputComment from'./InputComment'

function Comments({comments, commentInputRef}) {

    console.log(comments)


    return (
        <div className="post__commnets p-2 text-sm">
            {
                comments.length >= 1 && (
                    <p>View all {comments.length} comments</p>
                )
            }

            {
                 comments.slice(0, 3).map(item => (
                    <p  key={`${item.comment}-${item.displayName}`}> <b>{item.displayName}</b> {item.comment}</p>
                    ))
            }

            <InputComment commentInputRef={commentInputRef}/>
        </div>
    )
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    commentInputRef: PropTypes.string.isRequired
}

export default Comments
