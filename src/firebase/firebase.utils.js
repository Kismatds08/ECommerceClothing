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

/**const createUserProfileDocument = (userAuth, additionalData)=>{
    const userRef = firestore.collection(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()
}
createUserProfileDocument()*/

//Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

//Setting the parameter to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

//Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider) 

export default firebase
