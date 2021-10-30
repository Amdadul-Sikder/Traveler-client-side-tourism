import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInit from "../Firebase/Firebase.init";

firebaseInit();

const UseFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider)
        // .then((result) => {
        //     setUser(result.user);

        //     // console.log(result.user);
        //     setError("");
        // })
        // .catch((error) => setError(error.message));
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return {
        googleSignIn,
        user,
        isLoading,
        handleLogout
    }
};

export default UseFirebase;