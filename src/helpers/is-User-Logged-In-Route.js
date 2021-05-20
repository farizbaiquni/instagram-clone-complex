import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

function IsUserLoggedInRoute({user, loggedInPath, children, ...rest}) {
    return (
        <Route
            {...rest}
            render = {({location}) => {
                if(!user) {
                    return children
                }

                if(user){
                    return <Redirect 
                        to={{
                            pathname: loggedInPath, 
                            state: { from: location }
                        }}

                    />
                }

                return null
            }

            }

        />
    )
}

IsUserLoggedInRoute.propTypes = {
    user: PropTypes.object,
    loggedInPath: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}

export default IsUserLoggedInRoute
