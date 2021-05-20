import React, { useState, useSTate } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function Caption({username, caption, }) {

    const[captionLenght, setCaptionLenght] = useState(25)

    return (
        <div className="post__caption px-2 break-words text-sm">
            {
                // eslint-disable-next-line react/prop-types
                caption.length > 45 ? (
                   <>
                     <b>{username} </b>
                     <span>{
                     // eslint-disable-next-line react/prop-types   
                     caption.slice(0, captionLenght)
                     }</span>

                     <span onClick={
                         // eslint-disable-next-line react/prop-types
                         () => setCaptionLenght(caption.length - 1)
                         }
                         className={`cursor-pointer text-gray-text ${captionLenght <= 25 ? `inline` : `hidden`}`}
                         >...more 
                     </span>  
                   </>
                ) : (
                    <p><b>{username}</b> {caption}</p>
                )
            }

        </div>
    )
}

Caption.prototype = {
    username: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
}

export default Caption
