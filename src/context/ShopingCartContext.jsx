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

    // Cart Products
    const [cartProducts, setCartProducts] = useState([])

    // Checkout Side Menu - Open/Close
    const [isCartOpen, setCartOpen] = useState(false)
    const openCart = () => setCartOpen(true)
    const closeCart = () => setCartOpen(false)


    return(
        <ShopingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            showProductDetails,
            setShowProductDetails,
            cartProducts,
            setCartProducts,
            isCartOpen,
            openCart,
            closeCart
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}

export {ShopingCartContextProvider, ShopingCartContext}