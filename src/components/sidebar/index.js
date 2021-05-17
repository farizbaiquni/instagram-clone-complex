import React from 'react'
import userData from '../../hooks/user-data';
import User from './User'
import Suggestion from './Suggestion'


function Sidebar() {
    const {userId, docId, username, fullName, following} = userData()

    return (
        <div className="container p-3 col-span-1 lg-max:hidden">
            <User username={username} fullName={fullName} />
            <Suggestion authUserId={userId} authDocId={docId} authFollowing={following}/>
        </div>
    )
}

export default Sidebar
