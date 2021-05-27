import React from 'react'
import PropTypes from 'prop-types'

function Photo({photo}) {
    return (
        <div className="group relative pb-one-hundred-percent">
                            <img 
                                src={photo.imageSrc}
                                alt=""
                                className="absolute left-0 top-0 
                                object-cover h-one-hundred-percent 
                                w-one-hundred-percent
                                hover:opacity-50"
                            />
                            <div className="absolute left-0 bottom-0 text-sm w-full h-full opacity-0 hover:opacity-100 hover:bg-black-faded">
                                <div className="flex justify-center items-center w-full h-full text-white">
                                    {
                                        photo.likes.length >= 1 && (<span className="flex mr-3">
                                        <svg 
                                            className="opacity-100 mr-2"
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24" 
                                            fill="#ffffff" 
                                            stroke="#ffffff" 
                                            strokeWidth="1" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round">
                                                <path
                                                fillRule="evenodd"
                                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                                </path>
                                        </svg>
                                        <b>{photo?.likes.length}</b>
                                        
                                    </span>)
                                    }
                                    <span className="flex">
                                        <svg 
                                            className="opacity-100 mr-2"
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24" 
                                            fill="#ffffff" 
                                            stroke="#ffffff" 
                                            strokeWidth="1" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round">
                                                <path
                                                fillRule="evenodd"
                                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                                </path>
                                        </svg>
                                        <b>{photo?.comments.length}</b>
                                    </span>
                                </div>
                            </div>
                        </div>
    )
}

Photo.propTypes = {
    photo: PropTypes.shape({
        imageSrc: PropTypes.string,
        photoId: PropTypes.string,
        likes: PropTypes.array,
        comments: PropTypes.array,
    })
}

export default Photo
