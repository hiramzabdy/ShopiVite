import { createContext, useContext, useState } from "react";

const ShopingCartContext = createContext()

function ShopingCartContextProvider({children}){
    // Product Detail Aside - Open/Close
    const [isProductDetailOpen, setProductDetailOpen] = useState(false)
    const openProductDetail = () => setProductDetailOpen(true)
    const closeProductDetail = () => setProductDetailOpen(false)

    // Checkout Side Menu - Open/Close
    const [isCartOpen, setCartOpen] = useState(false)
    const openCart = () => setCartOpen(true)
    const closeCart = () => setCartOpen(false)

    // Selected Product Details
    const [showProductDetails, setShowProductDetails] = useState({})

    // Cart Total Products
    const [cartProducts, setCartProducts] = useState([])

    // My order
    const [orders, setOrders] = useState([])


    return(
        <ShopingCartContext.Provider value={{
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            showProductDetails,
            setShowProductDetails,
            cartProducts,
            setCartProducts,
            isCartOpen,
            openCart,
            closeCart,
            orders,
            setOrders
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}

export {ShopingCartContextProvider, ShopingCartContext}