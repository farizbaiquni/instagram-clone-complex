import { firebase } from '../lib/firebase'

export async function doesUserNameExist(username){
    let result = await firebase.firestore()
        .collection('users')
        .where('username', '==', username)
        .get()

        return result.docs.length;
        // return result.docs.size; //Other option
}