/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const Tower = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log('user in auth state changed', user);
            setUser(user);
        });
        return () => {
            unSubscribe();
        }

    }, [])


    const authData = {
        user,
        createUser,
        logOut,
        signInUser,
    }




    return (
        <Tower.Provider value={authData}>
            {children}
        </Tower.Provider>
    );
};

export default AuthProvider;