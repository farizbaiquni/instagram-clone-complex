import React from 'react'
import userData from '../../hooks/user-data';
import User from './User'
import Suggestion from './Suggestion'


function Sidebar() {
    const {userId, docId, username, fullName, following} = userData()

    return (
        <div>
            <User username={username} fullName={fullName} />
            <Suggestion authUserId={userId} authDocId={docId} authFollowing={following}/>
        </div>
    )
}

export default Sidebar
