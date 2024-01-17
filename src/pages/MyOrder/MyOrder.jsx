import { useContext } from "react"
import { Link } from "react-router-dom"
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid"
import { ShopingCartContext } from "../../context/ShopingCartContext"
import Layout from "../../components/Layout/Layout"
import OrderCard from "../../components/OrderCard/OrderCard"


function MyOrder(){
    const context = useContext(ShopingCartContext)
    const currentOrder = window.location.pathname
    let currentOrderIndex = currentOrder.substring(currentOrder.lastIndexOf("/")+1)

    if(isNaN(currentOrderIndex)){
        currentOrderIndex = context.orders.length-1
    }

    return(
        <Layout>
            <div className="flex items-center justify-center w-80 relative">
                <Link className="absolute left-0" to={"/MyOrders/"}>
                    <ChevronDoubleLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='m-4 flex flex-col w-100'>
                {context.orders[currentOrderIndex]?.items.map(product => {
                    return(<OrderCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}></OrderCard>)
                })}
            </div>
        </Layout>
    )
}

export default MyOrder