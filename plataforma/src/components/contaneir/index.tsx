import { ReactNode } from "react"

export function Contaneir({children}: {children:ReactNode}){
    return(
        <div className="w-full max-w-7xl mx-auto px-4">
            {children}
        </div>
    )
}