import React, {useState, useEffect, useContext} from 'react'
import userContext from '../context/userContext'
import { getCurrentUserData } from '../services/firebase'
import { getPhotos } from '../services/firebase'

function usePhotos() {
    const [photos, setPhotos] = useState(null);
    const authUserId = useContext(userContext).uid;
    
    useEffect( async () => {

        const [{following}] = await getCurrentUserData(authUserId);
        
        if(following.length > 0){

            let followingPhotos = await getPhotos(authUserId, following)
            followingPhotos = followingPhotos.sort((a, b) => b.dateCreated - a.dateCreated)
            setPhotos(followingPhotos)

        } else {
            setPhotos([])
        }

    }, [authUserId])


    return photos
}

export default usePhotos
