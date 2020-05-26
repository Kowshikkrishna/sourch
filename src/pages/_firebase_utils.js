import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeCOUR2JmzR5asEk6WCSjhzX53zhCxGO8",
    authDomain: "sourch-26b1f.firebaseapp.com",
    databaseURL: "https://sourch-26b1f.firebaseio.com",
    projectId: "sourch-26b1f",
    storageBucket: "sourch-26b1f.appspot.com",
    messagingSenderId: "828160653947",
    appId: "1:828160653947:web:405f88bbf713e5217940de",
    measurementId: "G-3NC9XQG675"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({"prompt": "select_account"});

const db = firebase.firestore();

export const createUserRecord = async (firebaseUser, additionalUserInfo) => {
    if(firebaseUser === null) {
        return;
    }

    const userRef = db.collection("users").doc(firebaseUser.uid);
    const docSnapshot = userRef.get();

    if(!docSnapshot.exists) {
        const { displayName, email, phoneNumber, photoURL } = firebaseUser;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                phoneNumber,
                photoURL,
                createdAt,
                ...additionalUserInfo
            });
            console.log("User data added to firestore");
        } catch(error) {
            console.log("Error in adding user data to firestore => ", error.message);
        }
    }
}