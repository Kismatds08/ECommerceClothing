import firebase from 'firebase/app'
import 'firebase/firestore' //for Database
import 'firebase/auth' //for Authentication

const config ={
    apiKey: "AIzaSyDfd-0tTihtLu_0iIPegGrANDSheOvty3U",
    authDomain: "ecommerceclothing-db.firebaseapp.com",
    projectId: "ecommerceclothing-db",
    storageBucket: "ecommerceclothing-db.appspot.com",
    messagingSenderId: "257196050048",
    appId: "1:257196050048:web:8fc77fad7517c787c44865",
    measurementId: "G-68CM3WCDL1"
}

firebase.initializeApp(config)

//Assigning your firebase authentication library
export const auth= firebase.auth();
// Assigning your firebase firestore library
export const firestore= firebase.firestore();

//Create doc insile firestore by capturing user object from authentication library
export const createUserProfileDocument = async(user, displayName)=>{
    if(!user) return

    const userRef = firestore.doc(`users/${user.uid}`)

    const snapShot = await userRef.get()
    console.log(snapShot)
    if(!snapShot.exists){
        const {email} = user
        const createdAt = new Date()
    try{
        await userRef.set({
            displayName,
            email,
            createdAt
        })
} catch(error){
    console.log ("Error", error.message)
        }
    }
    return userRef
}
createUserProfileDocument()

//Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

//Setting the parameter to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

//Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider) 

export default firebase
