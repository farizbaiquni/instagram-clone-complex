import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { updateFollowingAuthenticatedUser, updateFollowerSuggestedUser } from '../../services/firebase'
import ButtonFollow from './ButtonFollow'

// eslint-disable-next-line react/prop-types
function SuggestedUsers({authUserId, authDocId, userDocId, userId,  username, fullName}) {

    const[followed, setFollowed] = useState(false)

    async function handleFollow(){
        
        //Update following authenticated user
        await updateFollowingAuthenticatedUser(authDocId, userId, followed);

        //Update follower suggested user
        await updateFollowerSuggestedUser(userDocId, authUserId, followed);

        setFollowed(!followed)
    }

    return (
        <div className="flex justify-between items-center w-full mb-2">
            <div className="flex items-center w-3/5 overflow-hidden">
                <img src={`./images/avatars/${username}.jpg`} alt=""
                    className=" w-10 rounded rounded-full"/>
                <div className="truncate ml-3">
                    <h1 className="font-semibold">{fullName}</h1>
                    <h1 className="text-gray-base">Suggested for you</h1>
                </div>
            </div>

            <ButtonFollow isFollowed={followed} handleFollow={handleFollow}/>
        </div>
    )
}

SuggestedUsers.prototypes = {
    authDocId: PropTypes.string.isRequired,
    username: PropTypes.string,
    fullName: PropTypes.string

}

export default SuggestedUsers


