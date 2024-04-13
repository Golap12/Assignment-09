/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const Tower = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);

        });
        return () => {
            unSubscribe();
        }

    }, [])


    const authData = {
        user,
        loading,
        createUser,
        logOut,
        signInUser,
        googleLogin,
        githubLogin,
        updateUserProfile
    }




    return (
        <Tower.Provider value={authData}>
            {children}
        </Tower.Provider>
        
    );
};

export default AuthProvider;