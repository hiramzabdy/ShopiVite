import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShopingCartContext } from "../../context/ShopingCartContext"

function OrderCard(props){
    const context = useContext(ShopingCartContext)
    const { id, title, image, price } = props

    return(
        <div className="flex justify-between items-center my-4">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-20 h-20 rounded-lg object-cover" src={image} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium ml-4">${price}</p>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => {
                    const productsInCart = [...context.cartProducts]
                    const productIndex = productsInCart.findIndex(product => product.id === id)
                    productsInCart.splice(productIndex, 1)
                    context.setCartProducts(productsInCart)
                }}></XMarkIcon>
            </div>
        </div>
    )
}

export default OrderCard