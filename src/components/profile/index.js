import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { getPhotosByUserId } from '../../services/firebase'
import Profile from './Profile'
import PhotosCollection from './PhotosCollection'

function IndexPofile({user}) {

    const initialState = {
        profile: {}, 
        photosCollection: [],
        followerCount: 0,
    }

    const reducer = (state, newState) => ({...state, ...newState})

    const[{profile, photosCollection}, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function getProfileInfoAndPhoto(){
            const photos = await getPhotosByUserId(user.userId)
            console.log(photos)
            dispatch({profile: user, photosCollection: photos})
        }

        if(user.username){
            getProfileInfoAndPhoto()
        }

    }, [user])


    return (
        <div className="container max-w-screen-lg mx-auto">
            <Profile profile={profile} photosCollection={photosCollection}/>
            <PhotosCollection profile={profile} photosCollection={photosCollection}/>
        </div>
    )
}

export default IndexPofile

IndexPofile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        dateCreated: PropTypes.number.isRequired,
        userId: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        followers: PropTypes.array.isRequired,
        following: PropTypes.array.isRequired,
    }).isRequired
}
