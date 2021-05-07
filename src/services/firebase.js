import { firebase } from '../lib/firebase'

export async function doesUserNameExist(username){
    let result = await firebase.firestore()
        .collection('users')
        .where('username', '==', username)
        .get()

        return result.docs.length;
        // return result.docs.size; //Other option
}

export async function getCurrentUserData(user_id){
    let result = await firebase.firestore()
        .collection('users')
        .where('userId', '==', user_id)
        .get()

    let userData = result.docs.map(doc => ({
        ...doc.data(),
        userId: user_id
    }))

    return userData;
}