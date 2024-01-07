import { createContext, useState } from "react";

const ShopingCartContext = createContext()

function ShopingCartContextProvider({children}){
    const [count, setCount] = useState(0)

    return(
        <ShopingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}

export {ShopingCartContextProvider, ShopingCartContext}