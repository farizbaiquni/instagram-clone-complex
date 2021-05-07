import { useState, useEffect, useContext } from 'react'
import FirebaseContext from '../context/firebase'

function useAuthListener() {
    
    const[user, setUser] = useState(JSON.parse(localStorage.getItem('userCredential')))
    const {firebase} = useContext(FirebaseContext)

    useEffect(() => {

        const listener = firebase.auth().onAuthStateChanged((userCredential) => {
            if(userCredential){
                localStorage.setItem('userCredential', JSON.stringify(userCredential));
                setUser(userCredential)
            }else{
                localStorage.removeItem('userCredential');
                setUser(null)
            }
        })

        return () => listener();

    }, [firebase])

    return user 
}

export default useAuthListener
