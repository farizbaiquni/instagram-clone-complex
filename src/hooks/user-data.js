import { useEffect, useContext, useState } from 'react'
import userContext from '../context/userContext'
import { getCurrentUserData } from '../services/firebase'



//Fungsi ini digunakan untuk mendapatan data dari user yang terautentikasi
//menggunakan useEffect
function userData() {

    const userCredential = useContext(userContext);
    const [currentUserData, setCurrentUserData] = useState({}); 
    
    useEffect(() => {

        async function callFetchFunction(){
            const [data] = await getCurrentUserData(userCredential.uid)
            setCurrentUserData(data)
        }

        if(userCredential?.uid){
            callFetchFunction()
        }

    }, [userCredential]);

    return currentUserData;
}

export default userData
