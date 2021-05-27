import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import Photo from './Photo'

function PhotosCollection({profile, photosCollection}) {
    return (
        <div className="max-w-screen-lg sm:mt-10 sm-max:mt-5">
            <hr/>
            <div className="container grid grid-cols-3 gap-5 w-auto mt-2">
                {
                    // eslint-disable-next-line react/prop-types
                    photosCollection.map( item => (
                        <Photo key={item.photoId} photo={item} />
                    ))
                }
            </div>
        </div>
    )
}

PhotosCollection.propTypes = {

    photosCollection: PropTypes.shape({
        imageSrc: PropTypes.string,
        photoId: PropTypes.string,
    }),

    profile: PropTypes.shape({
        username: PropTypes.string,
        fullName: PropTypes.string,
        dateCreated: PropTypes.number,
        userId: PropTypes.string,
        docId: PropTypes.string,
        followers: PropTypes.array,
        following: PropTypes.array,
    })

}

export default PhotosCollection
