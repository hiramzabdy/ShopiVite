import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShopingCartContext } from '../../context/ShopingCartContext'
import "./styles.css"

function ProductDetail(){
    const context = useContext(ShopingCartContext)
    return(
        <aside className={`${context.isProductDetailOpen ? "flex" : "hidden"} overflow-y-scroll  product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-4">
                <h2 className="font-medium text-xl" onClick={() => console.log(context.showProductDetails)}>Details</h2>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={context.closeProductDetail}></XMarkIcon>
            </div>
            <figure className='m-4'>
                <img src={context.showProductDetails.image} alt={context.showProductDetails.title} />
            </figure>
            <div className='m-4 flex flex-col'>
                <span className='font-medium text-2xl'>{context.showProductDetails.title}</span>
                <span className='font-medium text-md'>Price ${context.showProductDetails.price}</span>
                <span className='font-light text-sm'>Description: {context.showProductDetails.description}</span>
            </div>
        </aside>
    )
}

export default ProductDetail