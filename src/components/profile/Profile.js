import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import userData from '../../hooks/user-data'
import { isLoggedUserFollowedProfile, updateFollowingAuthenticatedUser, updateFollowerSuggestedUser } from '../../services/firebase'
import Skeleton from 'react-loading-skeleton'


//Profile is data from user who could be loggedUser or other user

// eslint-disable-next-line react/prop-types
function Profile({profile, photosCollection}) {

    const user = userData();

    const[isFollowedPofile, setIsFollowedPofile] = useState(false) 


    console.log("profile", profile)
    console.log("authUser", user)


    const handleFollow = async () => {

            await updateFollowingAuthenticatedUser(user.docId, profile.userId, isFollowedPofile )
            await updateFollowerSuggestedUser(profile.docId, user.userId, isFollowedPofile)

            setIsFollowedPofile(!isFollowedPofile)

    }

    useEffect( () => {

        async function checkIsUserFollowedProfile(){
            const isFollowed =  await isLoggedUserFollowedProfile(user.username, profile.userId)
            setIsFollowedPofile(isFollowed)
        }


        if(user.userId != profile.userId){
            checkIsUserFollowedProfile()
        }
        

    },  [profile])

    return !profile?.docId && !user?.docId ? (
        <Skeleton height={500} width={900}/>
    ) : (
        <div className="sm: mx-1.5">
            <div className="header flex w-full">

                {/* PHOTO */}
                <section className="w-1/2 mr-2 flex justify-center object-contain">
                    <img src={`/images/avatars/${profile.username}.jpg`} 
                    className="rounded rounded-full sm:w-header-profile-photo sm-max:w-header-profile-photo-sm h-auto"
                    alt=""/>
                </section>


                <section className="w-full max-w-header-profile">
                    {/* USERNAME + BUTTON FOLLOW  */}
                    <div className="flex mb-5 sm:items-center sm-max:flex-col">
                        <p className="text-2xl sm:mr-5 sm-max:bg-white">{profile.username}</p> 
                        {
                            profile?.userId != user?.userId ? (
                                <button
                                    onClick={() => handleFollow()}
                                    className="bg-blue-post font-semibold text-white text-sm py-1 px-5 sm:w-auto sm-max: w-full">
                                        {isFollowedPofile ? "Followed" : "Follow"}
                                </button>
                            ) : (
                                <></>
                            )
                        }
                    </div>

                    {/* NUMBER POST, FOLLOWERS, AND FOLLOWING */}
                    <ul className="flex w-full mb-5 sm-max:hidden">
                        <li className="mr-7"><b className="font-semibold"> {photosCollection?.length} </b> {photosCollection?.length <= 1 ? "post" : "posts"}</li>
                        <li className="mr-7"><b className="font-semibold"> {profile.followers?.length} </b> {profile.followers?.length <= 1 ? "follower" : "followers"}</li>
                        <li className="">{profile.following?.length} following</li>
                    </ul>
                    <p className="break-words sm-max:hidden">{profile?.fullName}</p>
                </section>

            </div>

            {/* RESPONSIVE If THE SIZE IS SMALL */}
            {/* NUMBER POST, FOLLOWERS, AND FOLLOWING */}
            <span>
            <p className="break-words mt-4 px-5 sm:hidden">{profile?.fullName}</p>
            <ul className="flex w-full justify-around mt-5 sm:hidden">
                <li><b className="font-semibold"> {photosCollection?.length} </b> {photosCollection?.length <= 1 ? "post" : "posts"}</li>
                <li><b className="font-semibold"> {profile.followers?.length} </b> {profile.followers?.length <= 1 ? "follower" : "followers"}</li>
                <li>{profile.following?.length} following</li>
            </ul>
            </span>
               


        </div>
    )
}

Profile.propTypes = {
    photosCollection: PropTypes.array.isRequired, 
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

export default Profile

