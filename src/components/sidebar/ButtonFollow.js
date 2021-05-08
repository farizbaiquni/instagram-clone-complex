import React from 'react'

// eslint-disable-next-line react/prop-types
function ButtonFollow({ isFollowed, handleFollow}) {
    return (
        <>
               {
                    !isFollowed ? (
                        <button type="button" 
                            className="text-blue-medium font-bold"
                            onClick={() => handleFollow()}>
                                Follow
                        </button>
                    ) : (
                        <button type="button" 
                            className="text-blue-medium font-bold"
                            onClick={() => handleFollow()}>
                                Followed
                        </button>
                    )
               }
        </>
    )
}

export default ButtonFollow
