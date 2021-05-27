import { fieldValue, firebase } from '../lib/firebase'


export async function doesUserNameExist(username){
    let result = await firebase.firestore()
        .collection('users')
        .where('username', '==', username)
        .get()

        return result.docs.length;
        // return result.docs.size; //Other option
}

export async function getUserByUsername(username){
        const result = await firebase.firestore().collection('users').where('username',  '==', username).get();
        
        return result.docs.map(data => ({
            ...data.data(),
            docId: data.id
        }))
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
            followers : !followed ? fieldValue.arrayUnion(authUserId) : fieldValue.arrayRemove(authUserId)
        })
}


export async function getPhotos(authUserId, following){

    const followingPhotos = await firebase.firestore().collection('photos').where("userId",  "in", following).get();


    const userFollowingPhotosDetail = await Promise.all(followingPhotos.docs.map(async (photo) => {

        const result = await firebase.firestore().collection('users').where("userId",  "==", photo.data().userId).get();

        const username = result.docs.map(user => user.data().username)
        
        let isAuthUserLikedPhoto = false

        if([photo.data().likes][0].includes(authUserId)){
            isAuthUserLikedPhoto = true;
        }

        return{...photo.data(), photoId : photo.id, isUserLiked: isAuthUserLikedPhoto, username: username[0]};

    }))

    return userFollowingPhotosDetail;

}

export async function getPhotosByUserId(userId){

    const result = await firebase.firestore().collection("photos").where("userId", "==", userId).get()

    return result.docs.map(item => ({...item.data(), photoId: item.id}))
    
}


export async function isLoggedUserFollowedProfile(loggedUsername, profileId){
    const result = await firebase.firestore()
        .collection("users")
        .where("username",  "==", loggedUsername)
        .where("following", "array-contains", profileId)
        .get()

    return result.size > 0 ? true : false;

}