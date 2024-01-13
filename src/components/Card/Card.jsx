import { useContext } from "react"
import { PlusIcon, CheckCircleIcon} from '@heroicons/react/24/solid'
import { ShopingCartContext } from "../../context/ShopingCartContext"


function Card(data){
    const context = useContext(ShopingCartContext)

    const showProduct = () => {
        if (context.isCartOpen) context.closeCart()
        context.setShowProductDetails(data.data)
        context.openProductDetail()
    }

    const addPorductToCart = (product) => {
        if (context.isProductDetailOpen) context.closeProductDetail()
        context.setCartProducts([...context.cartProducts, product])
    }

    const renderIcon = (id) => {
        const isProductInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if(isProductInCart){
            return(
                <CheckCircleIcon className="absolute top-0 right-0 flex justify-center items-center bg-stone-300 w-8 h-8 rounded-full m-1 p-1"></CheckCircleIcon>
            )
        }else{
            return(
                <PlusIcon className="absolute top-0 right-0 flex justify-center items-center bg-stone-300 w-8 h-8 rounded-full m-1 p-1"
                onClick={() => {
                    addPorductToCart(data.data)
                    context.openCart()
                    }
                }>+</PlusIcon>
            )
        }
    }

    return(
        <div className="bg-white cursor-pointer w-48 m-8">
            <figure className="relative mb-4 w-full">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 px-3 py-0.5">{data.data.category}</span>
                <img src={data.data.image} alt={data.data.title} className="w-40 h-40 object-fill rounded-lg" onClick={showProduct}/>
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card