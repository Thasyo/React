import {db} from "../firebase/config"
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
    const [sucess, setSucess] = useState();

    //clearnup
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    const checkIfIsCancelled = () => {

        if(cancelled) {
            return;
        }

    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);
        setSucess(null);

        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName
            });

            setLoading(false);
            setSucess("Cadastro enviado com sucesso!");
            return user;

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemMessageError;

            if(error.message.includes("Password")){
                systemMessageError = "A senha precisa ter pelo menos 6 caracteres!";
            }else if(error.message.includes("email-already")){
                systemMessageError = "E-mail já cadastrado!";
            }else{
                systemMessageError = "Ocorreu um error, tente novamente mais tarde!";
            }

            setError(systemMessageError);
        }

        setLoading(false);
    }
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        sucess
    }

}