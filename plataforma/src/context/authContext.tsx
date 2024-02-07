import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useState, useEffect } from "react";
import { auth } from "../services/firebaseconnection";

interface AuthProviderProps{
    children: ReactNode
}

type authContextData ={
    signed: boolean;
    loadingAuth: boolean;
    handleInfoUser: ({ name, email, uid}: userProps) => void;
    user: userProps | null
}

interface userProps{
    uid: string;
    name: string | null;
    email: string | null;
}

export const authContext = createContext( {} as authContextData)

function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<userProps | null>(null)
    const [loadingAuth, setloadingAuth] = useState(true)

    useEffect( () => {
        const unsub = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser({
                    uid: user.uid,
                    name: user?.displayName,
                    email: user?.email
                })

            }else{
                setUser(null);
                setloadingAuth(false)
            }

        })
     return () => {
        unsub();
     }

    }, [])

    function handleInfoUser({ name, email, uid}: userProps){
        setUser({
            name,
            email,
            uid,
        })
    }

    return(
        <authContext.Provider value={{signed: !!user, loadingAuth, handleInfoUser, user}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;