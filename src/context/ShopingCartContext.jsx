import { createContext, useContext, useState } from "react";

const ShopingCartContext = createContext()

function ShopingCartContextProvider({children}){
    // Items on Cart
    const [count, setCount] = useState(0)

    // Product Detail Aside - Open/Close
    const [isProductDetailOpen, setProductDetailOpen] = useState(false)
    const openProductDetail = () => setProductDetailOpen(true)
    const closeProductDetail = () => setProductDetailOpen(false)

    // Details to show
    const [showProductDetails, setShowProductDetails] = useState({})

    return(
        <ShopingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            showProductDetails,
            setShowProductDetails
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}

export {ShopingCartContextProvider, ShopingCartContext}