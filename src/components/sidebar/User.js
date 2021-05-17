import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import * as ROUTES from '../../constants/routes'

function user({username, fullName}) {
    return (
        <div>
            {
                !username || !fullName ? (
                    <Skeleton count={1} height={61}/>
                ) : (

                    <div className="grid grid-cols-4">
                        
                        <Link to={ROUTES.PROFILE} className="col-span-1 gap-4">
                            <img src={`./images/avatars/${username}.jpg`} alt="" className="rounded-full w-14"/>
                        </Link>
                        
                        <div className="flex flex-col justify-center">
                            <Link to={ROUTES.PROFILE} className="col-span-3">
                                <h3 className="text-sm font-bold">{username}</h3>
                            </Link>
                            <h3>{fullName}</h3>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default React.memo(user)
