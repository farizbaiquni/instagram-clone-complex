import React from 'react'
import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'

function HeaderPost({username}) {
    return (
        <div className="post__headerPost bg-white flex p-2 items-center">
            <img 
                src={`images/avatars/${username}.jpg`} 
                alt=""
                className="rounded-full w-10 h-10 mr-3"/> 
            <Link to="" className="text-sm font-semibold" >{username}</Link>    
        </div>
    )
}

HeaderPost.propTypes = {
    username: PropsTypes.string.isRequired
}



export default HeaderPost
