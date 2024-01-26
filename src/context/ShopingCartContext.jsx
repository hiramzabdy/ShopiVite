import { createContext, useEffect, useState } from "react";

const ShopingCartContext = createContext()

function ShopingCartContextProvider({children}){
    // User Information
    const [userData, setUserData] = useState({
        "name": "",
        "email": "",
        "password": "",
        "isLoggedIn": false
    })

    // Products API
    const [fakeStoreProducts, setFakeStoreProducts] = useState(null)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setFakeStoreProducts(data))
    }, [])

    // Filtered Products
    const [searchValue, setSearchValue] = useState("")
    const filteredProducts = fakeStoreProducts?.filter((product) => {
        const searchingTextValue = searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        const productTitle = product.title.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        if(productTitle.includes(searchingTextValue)){
        return product
        }
    })

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
            userData,
            setUserData,
            filteredProducts,
            setSearchValue,
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