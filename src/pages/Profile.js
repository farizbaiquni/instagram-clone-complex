import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getUserByUsername } from '../services/firebase'
import * as ROUTES from '../constants/routes'
import Header from '../components/Header'
import IndexProfile from '../components/profile'

function Profile() {

    const { username } = useParams()
    const history = useHistory()
    const [user, setUser] = useState(null)
    const [isUserExist, setIsUserExist] = useState(false)

    useEffect( async() => {

        const dataUser = await getUserByUsername(username);

        if(dataUser.length > 0){
            setUser(dataUser)
            setIsUserExist(true)
        } else {
            setUser(null)
            setIsUserExist(false)
            history.push(ROUTES.NOT_FOUND)
        }

    }, [username, history])

    return isUserExist ? (
        <div>
            <Header />
            <IndexProfile user={user[0]} />
        </div>
    ) : (
        null
    )
}

export default Profile
