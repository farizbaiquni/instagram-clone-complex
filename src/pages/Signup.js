import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { doesUserNameExist } from '../services/firebase'
import { set } from 'date-fns';

function login() {

    const { firebase } = useContext(FirebaseContext);

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || email === '';

    const handleSignUp = async (event) => {
        event.preventDefault();

        let usernameExist = await doesUserNameExist(username);
        
        if( usernameExist <= 0){
            try {

                const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
    
                await userCredential.user.updateProfile({
                    displayName : username,
                })
    
                await firebase.firestore().collection('users').add({
                    userId: userCredential.user.uId,
                    emailAddress: email,
                    username: username,
                    fullName: fullName,
                    dateCreate: firebase.firestore.FieldValue.serverTimestamp(),
                    followers: [],
                    following: [],
                })

                setUsername('')
                setEmail('')
                setFullName('')
                setPassword('')

                history.push(ROUTES.DASHBOARD)
                
            } catch (error) {
                setError(error.message)
            }
        } else {
            setError("That username is already taken, please try another")
        }

    }

    useEffect(() => {
        document.title = 'SignUp - Instagram'
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

                    <form onSubmit={handleSignUp} action="post">
                        <input 
                        className="text-sm text-gray-base w-full mb-3 mr-3 py-5 px-4 h-2 border border-gray-primary rounded"
                        aria-label="Enter your email address"
                        type="text" 
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        ></input>

                        <input 
                        className="text-sm text-gray-base w-full mb-3 mr-3 py-5 px-4 h-2 border border-gray-primary rounded"
                        aria-label="Full Name"
                        type="text" 
                        placeholder="Full Name"
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                        ></input>

                        <input 
                        className="text-sm text-gray-base w-full mb-3 mr-3 py-5 px-4 h-2 border border-gray-primary rounded"
                        aria-label="Username"
                        type="text" 
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        ></input>

                        <input 
                        className="text-sm text-gray-base w-full mb-3 mr-3 py-5 px-4 h-2 border border-gray-primary rounded"
                        aria-label="Enter your password"
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        ></input>
                        
                        <button
                            type="submit"
                            disabled={isInvalid}
                            className={`bg-blue-medium text-white font-bold w-full rounded p-1 ${isInvalid && "opacity-50"}`}
                        >SignUp</button>
                    </form>
                </div>

                <div className="flex flex-col w-full bg-white p-3 justify-center items-center border border-gray-primary">
                    <p className="text-sm">Have an account ? <Link to={`${ROUTES.LOGIN}`} className="font-bold text-blue-medium">Login</Link></p>
                </div>
                
            </div>
        </div>
    )
}

export default login

