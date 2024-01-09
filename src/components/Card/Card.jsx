import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShopingCartContext } from "../../context/ShopingCartContext"


function Card(data){
    const context = useContext(ShopingCartContext)

    function showProduct(){
        context.setShowProductDetails(data.data)
        context.openProductDetail()
    }

    return(
        <div className="bg-white cursor-pointer w-48 m-8">
            <figure className="relative mb-4 w-full">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 px-3 py-0.5">{data.data.category}</span>
                <img src={data.data.image} alt={data.data.title} className="w-40 h-40 object-fill rounded-lg" onClick={showProduct}/>
                <PlusIcon className="absolute top-0 right-0 flex justify-center items-center bg-stone-300 w-8 h-8 rounded-full m-1 p-1"
                onClick={() => context.setCount(context.count + 1)}>+</PlusIcon>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card