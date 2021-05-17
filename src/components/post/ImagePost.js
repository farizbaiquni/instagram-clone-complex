import React from 'react'
import PropTypes from 'prop-types'

function ImagePost({username, imageSrc}) {
    return (
        <>
            <img src={imageSrc} alt="" className="object-fill w-ig-photo-width w-ig-photo-height"/>
        </>
    )
}

ImagePost.propTypes = {
    username : PropTypes.string.isRequired,
    imageSrc : PropTypes.string.isRequired,
}

export default ImagePost
