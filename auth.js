const topNav = document.querySelector(".top-nav");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");
const registerSection = document.querySelector("#registerSection");
const dashboardSection = document.querySelector("#dashboardSection");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userProfilePicture = document.querySelector("#userProfilePicture");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtmnATOtfylf6dvZVDHI_QrEgJdZ3UX4o",
    authDomain: "tech-watch-community-1add1.firebaseapp.com",
    projectId: "tech-watch-community-1add1",
    storageBucket: "tech-watch-community-1add1.appspot.com",
    messagingSenderId: "589861771076",
    appId: "1:589861771076:web:834356a5a00970ea09e911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


const userSignIn = async () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            alert("You have signed in successfully!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message
        })
}

const userSignOut = async () => {
    signOut(auth).then(() => {
        alert("You have signed out successfully!");
    }).catch((error) => {
        alert(error);
    })
}

onAuthStateChanged(auth, (user) =>{
    if (user){
        // User is logged in
        signOutButton.classList.remove("hide");
        topNav.classList.remove("hide");
        registerSection.classList.add("hide")
        dashboardSection.classList.remove("hide");
        userName.textContent = user.displayName;
        userEmail.textContent = user.email;
        userProfilePicture.src = user.photoURL;
    }
    else{
        // User is not logged in
        signOutButton.classList.add("hide");
        topNav.classList.add("hide");
        registerSection.classList.remove("hide");
        dashboardSection.classList.add("hide");
    }
})

signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);