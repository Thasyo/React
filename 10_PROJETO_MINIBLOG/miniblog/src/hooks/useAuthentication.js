import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import {useState, useEffect} from "react"

export const useAuthentication = () => {

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    //clearnup
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    const checkIfIsCancelled = () => {

        if(cancelled) {
            return;
        }

    }

}