import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase_init";


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=> {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=> {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = ()=> {
        return signOut(auth)
    }

    const googleLogin = ()=> {
        return signInWithPopup(auth,googleProvider)

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=> {
            if(user){
                setUser(user);
                setLoading(false);
            }
            else {
                setUser(null);
                setLoading(false);
            }

            return ()=> {
                unsubscribe();
            }
        })
    } ,[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;