import { ReactNode, useContext } from "react"
import { authContext } from "../context/authContext"
import { Navigate } from "react-router-dom"

interface PrivateProps{
    children: ReactNode
}


export function Private({ children}: PrivateProps): any{
   const { signed, loadingAuth} = useContext(authContext)

   if(loadingAuth){

   }

   if(!signed){
    return <Navigate to="/login" />
   }

    return children;
}

