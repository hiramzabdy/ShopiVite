import { useContext } from "react"
import { ShopingCartContext } from "../../context/ShopingCartContext"

function Card(data){
    const context = useContext(ShopingCartContext)
    return(
        <div className="bg-white cursor-pointer w-80 m-8">
            <figure className="relative mb-4 w-full">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 px-3 py-0.5">{data.data.category}</span>
                <img src={data.data.image} alt={data.data.title} className="w-80 h-80 object-fill rounded-lg"/>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-1 p-1"
                onClick={() => context.setCount(context.count + 1)}>+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card