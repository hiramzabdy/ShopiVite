import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShopingCartContext } from '../../context/ShopingCartContext'
import "./styles.css"

function ChechoutSideMenu(){
    const context = useContext(ShopingCartContext)
    return(
        <aside className={`${context.isCartOpen ? "flex" : "hidden"} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-4">
                <h2 className="font-medium text-xl" onClick={() => console.log(context.showProductDetails)}>My Order</h2>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={context.closeCart}></XMarkIcon>
            </div>
            <div className='m-4 flex flex-col'>
                {context.cartProducts.map(product => {
                    return(<p className='font-medium text-md'>─{product.title}</p>)
                })}
            </div>
        </aside>
    )
}

export default ChechoutSideMenu