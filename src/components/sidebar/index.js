import React from 'react'
import userData from '../../hooks/user-data';
import User from './User'
import Suggestion from './Suggestion'

function Sidebar() {

    
    const {username, fullName} = userData();

    return (
        <div>
            <User username={username} fullName={fullName} />
            {/* <Suggestion userId={userId}/> */}
        </div>
    )
}

export default Sidebar
