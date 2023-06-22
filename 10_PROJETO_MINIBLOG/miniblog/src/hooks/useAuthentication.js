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

    const auth = getAuth();

    //clearnup - evita sobrecarga e vazamento de memória.
    const [cancelled, setCancelled] = useState(false);

    const checkIfIsCancelled = () => {

        if(cancelled) {
            return;
        }

    }

    //Register - criando perfil de usuário.
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
                systemMessageError = "Ocorreu um erro, tente novamente mais tarde!";
            }

            setError(systemMessageError);
        }

        setLoading(false);
    }

    //logout
    const logout = () => {

        checkIfIsCancelled();

        signOut(auth);
    }

    //login
    const login = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(false);

        try {

            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);

        } catch (error) {

            let systemMessageError;

            if(error.message.includes("user-not-found")){
                systemMessageError = "Usuário não existe";
            }else if(error.message.includes("wrong-password")){
                systemMessageError = "Senha incorreta.";
            }else{
                systemMessageError = "Ocorreu um erro, tente novamente mais tarde!";
            }

            setError(systemMessageError);
            setLoading(false);
        }
    }


    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        sucess,
        logout,
        login
    }

}