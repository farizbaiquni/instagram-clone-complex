import { fieldValue, firebase } from '../lib/firebase'

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
        docId: doc.id,
    }))
    return userData;
}


export async function getSuggestionUsers(user_id, following){
    const result = await firebase.firestore().collection('users').limit(6).where('userId', '!=', user_id).get();
    const users = result
                .docs.map(doc => ({
                    ...doc.data(), 
                    docId: doc.id
                }))
                .filter(doc => !following.includes(doc.userId))
    return users
}

export async function updateFollowingAuthenticatedUser(authDocId, suggestedUserId, followed){
        await firebase.firestore().collection('users').doc(authDocId).update({
            following: !followed ? fieldValue.arrayUnion(suggestedUserId) : fieldValue.arrayRemove(suggestedUserId)
        })

}

export async function updateFollowerSuggestedUser(suggestedUserId, authUserId, followed){
        await firebase.firestore().collection('users').doc(suggestedUserId).update({
            follower : !followed ? fieldValue.arrayUnion(authUserId) : fieldValue.arrayRemove(authUserId)
        })
}