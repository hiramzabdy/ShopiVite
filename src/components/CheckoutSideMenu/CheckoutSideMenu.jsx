import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShopingCartContext } from '../../context/ShopingCartContext'
import OrderCard from '../OrderCard/OrderCard'
import { calculateTotalPrice } from '../../utils/checkoutTotal'
import "./styles.css"

function ChechoutSideMenu(){
    const context = useContext(ShopingCartContext)
    return(
        <aside className={`${context.isCartOpen ? "flex" : "hidden"} overflow-y-scroll checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-4">
                <h2 className="font-medium text-xl">My Order</h2>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={context.closeCart}></XMarkIcon>
            </div>
            <div className='m-4 flex flex-col'>
                {context.cartProducts.map(product => {
                    return(<OrderCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}></OrderCard>)
                })}
            </div>
            <div className='m-4 flex justify-between items-center'>
                <p className="text-lg font-light">Total:</p>
                <p className="text-2xl font-medium">${calculateTotalPrice(context.cartProducts)}</p>
            </div>
        </aside>
    )
}

export default ChechoutSideMenu