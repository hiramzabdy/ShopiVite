import { useContext } from "react"
import { Link } from "react-router-dom"
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import { ShopingCartContext } from "../../context/ShopingCartContext"
import Layout from "../../components/Layout/Layout"
import OrdersCard from "../../components/OrdersCard/OrdersCard"

function MyOrders(){
    const context = useContext(ShopingCartContext)

    return(
        <Layout>
            <div className="flex items-center justify-center w-80">
                <h1>My Orders</h1>
            </div>

            {context.orders.map((order, index) => {
                return(
                    <OrdersCard key={index} index={index} date={order.date} items={order.totalItems} price={order.totalPrice}>
                    </OrdersCard>
                    )
            })}
        </Layout>
    )
}

export default MyOrders