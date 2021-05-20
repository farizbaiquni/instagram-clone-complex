import React, { useContext, useRef } from 'react'
import Proptypes from 'prop-types'
import UserContext from '../../context/userContext'
import HeaderPost from './HeaderPost'
import ImagePost from './ImagePost'
import Actions from './Actions'
import Caption from './Caption'
import Comments from './Comments'


function Post({content}) {

    // console.log(content)

    const commentInputRef = useRef (null)
    const handleFocusCommentInput =  () => commentInputRef.current.focus()

    const {uid: authUserId} = useContext(UserContext)
    const {displayName: authUsername} = useContext(UserContext)

    return (
        <div className="post mb-3 border-gray-primary border-2 w-ig-photo-width bg-white">
            <HeaderPost username={content.username} />
            <ImagePost username={content.username} imageSrc={content.imageSrc}/>
            <Actions photoId={content.photoId} likes={content.likes} isUserLiked={content.isUserLiked} authUserId={authUserId} handleFocusCommentInput={handleFocusCommentInput}/>
            <Caption username={content.username} caption={content.caption}/>
            <Comments photoId={content.photoId} commentsPost={content.comments} commentInputRef={commentInputRef} dateCreated={content.dateCreated} authUsername={authUsername}/>
        </div>
    )
}

Post.propTypes = {
    content : Proptypes.shape({
        photoId: Proptypes.string.isRequired,
        username: Proptypes.string.isRequired,
        caption: Proptypes.string.isRequired,
        dateCreated: Proptypes.number.isRequired,
        imageSrc: Proptypes.string.isRequired,
        likes: Proptypes.array.isRequired,
        comments: Proptypes.array.isRequired,
        isUserLiked: Proptypes.bool.isRequired,
    })
}

export default Post
