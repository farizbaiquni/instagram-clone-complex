import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase'

function login() {

    const { firebase } = useContext(FirebaseContext);

    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || email === '';

    const handleLogin = () => {

    }

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, [])

    return (
        <div>
            <h1>Login Page</h1>
        </div>
    )
}

export default login

