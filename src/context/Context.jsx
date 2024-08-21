import { createContext } from "react";
import { useState } from "react";

export const TheContext = createContext(null);


// eslint-disable-next-line react/prop-types
const TheContextApi =({children})=>{
    const [cart, setCart]=useState(false)

    return(
        <TheContext.Provider value={{cart, setCart}}>
            {children}
        </TheContext.Provider>
    )
}

export default TheContextApi