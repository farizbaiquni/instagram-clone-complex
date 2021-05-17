import React, {userState, useContext, useState} from 'react'
import PropTypes from 'prop-types'
import { firebase, fieldValue } from '../../lib/firebase';

function Actions({photoId, likes, isUserLiked, authUserId, handleFocusCommentInput}) {

    const[totalLikes, setTotalLikes] = useState(likes.length);
    const[isAuthUserLiked, setIsAuthUserLiked] = useState(isUserLiked);
    
    const handleUserLiked = async () => {

        setIsAuthUserLiked( (isAuthUserLiked) => !isAuthUserLiked);

        await firebase.firestore().collection('photos').doc(photoId).update({
            likes : isAuthUserLiked ?  fieldValue.arrayRemove(authUserId) : fieldValue.arrayUnion(authUserId)
        })

        setTotalLikes((isAuthUserLiked) => isAuthUserLiked ? totalLikes-1 : totalLikes+1);

    }


    return (
        <div className="post__actions flex-col p-2">    
            <div className="mb-1 flex">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    onClick={() => handleUserLiked()}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    tabIndex={0}
                    className={`cursor-pointer mx-1 ${isAuthUserLiked ? `fill-red text-red-primary` : `text-black-primary`}`}
                >
                    <path 
                    strokeWidth={2}
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    />
                </svg>


                <svg 
                    onClick={() => handleFocusCommentInput()}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#000000" 
                    className="mx-1 cursor-pointer"
                    >
                        <path 
                            strokeWidth={2}
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
            </div>

            <p className="text-sm font-semibold">{totalLikes <= 1 ? `${totalLikes} like` : `${totalLikes} likes`}</p>
            
        </div>
    )
}

Actions.propTypes = {
    photoId: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    isUserLiked: PropTypes.bool.isRequired,
    authUserId: PropTypes.string.isRequired,
    handleFocusCommentInput : PropTypes.func.isRequired
}

export default Actions
