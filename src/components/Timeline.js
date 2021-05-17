import React from 'react'
import usePhotos from '../hooks/use-photos'
import Skeleton from 'react-loading-skeleton'
import Post from './post'

function Timeline() {

    const photos = usePhotos()

    return (
        <div className="container col-span-2">
            {
                !photos ? (
                    <Skeleton count={4} height={500} width={300} />
                ) : photos?.length <= 0 ? (
                    <h2>Follow people to see photos!</h2>
                ) : (
                   photos.map(photo => (
                    <Post key={photo.photoId} content={photo}/>
                   ) )
                )
            }
        </div>
    )
}

export default Timeline
