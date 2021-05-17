import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function Caption({username, caption}) {
    return (
        <div className="post__caption p-2">
            <p className="text-sm"><b>{username}</b> {caption}</p>
        </div>
    )
}

Caption.prototype = {
    username: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
}

export default Caption
