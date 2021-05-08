import React, { memo , useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import { getSuggestionUsers} from '..//../services/firebase'
import SuggestedUsers from './SuggestedUsers'

// eslint-disable-next-line react/prop-types
function Suggestion({authUserId, authDocId, authFollowing}) {

    const [profiles, setProfiles] = useState(null)

    useEffect(() => {
        async function callGetSuggestionUsers(){
            const response = await getSuggestionUsers(authUserId, authFollowing);
            setProfiles(response);
        }

        if(authUserId){
            callGetSuggestionUsers()
        }

    }, [authUserId])

    return !profiles ? (
        <Skeleton count={1} height={200}/>
    ) : (
        <div className="flex flex-col p-1 text-sm mt-7 truncate">    
            <div className="flex justify-between items-center w-full mb-2">
                <div className="flex items-center w-3/5 overflow-hidden">
                    <h1 className="text-base">Suggested For You</h1>
                </div>
                <a href="" className="text-sm ml-3">See All</a>
            </div>
            
            {
                profiles.map( profile => 
                  <SuggestedUsers 
                    key={ profile.docId }
                    authUserId={ authUserId }
                    authDocId={ authDocId }
                    userDocId={ profile.docId}
                    userId={ profile.userId }
                    username={ profile.username }
                    fullName={ profile.fullName }
                />
                )
                
            }
        </div>
    )

}

export default memo (Suggestion)
