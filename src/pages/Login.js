import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { set } from 'date-fns';

function login() {

    const { firebase } = useContext(FirebaseContext);

    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || email === '';

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            setemail('')
            setPassword('')
            history.push(ROUTES.DASHBOARD)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, [])

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen" >
            <div className="flex w-4/5">
                <img src="/images/iphone-with-profile.jpg" alt="Iphone With Profile"></img>
            </div>
            <div className="flex flex-col w-3/5">
                <div className="flex flex-col bg-white border border-gray-primary items-center mb-5 p-10">
                    <div className="flex justify-center w-full mb-5">
                        <img src="images/logo.png" alt="Instagram Kigi"
                        className="mt-2 mb-4 w-4/5"></img>
                    </div>

                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handleLogin} action="post">
                        <input 
                        className="text-sm text-gray-base w-full mb-3 mr-3 py-5 px-4 h-2 border border-gray-primary rounded"
                        aria-label="Enter your email address"
                        type="text" 
                        placeholder="Email address"
                        onChange={(e) => setemail(e.target.value)}
                        ></input>
                        <input 
                        className="text-sm text-gray-base w-full mb-3 mr-3 py-5 px-4 h-2 border border-gray-primary rounded"
                        aria-label="Enter your password"
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <button
                            type="submit"
                            disabled={isInvalid}
                            className={`bg-blue-medium text-white font-bold w-full rounded p-1 ${isInvalid && "opacity-50"}`}
                        >Login</button>
                    </form>
                </div>

                <div className="flex flex-col w-full bg-white p-3 justify-center items-center border border-gray-primary">
                    <p className="text-sm">Dont have an account ? <Link to={`${ROUTES.SIGN_UP}`} className="font-bold text-blue-medium">SignUp</Link></p>
                </div>
                
            </div>
        </div>
    )
}

export default login

