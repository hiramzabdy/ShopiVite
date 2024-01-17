import { Link } from "react-router-dom"
import { CalendarDaysIcon, ShoppingBagIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid"

function OrdersCard(props){
    const {index, date, items, price } = props

    return(
        <div className="flex justify-between items-center m-2 gap-4 border border-black p-4 rounded-lg w-80">
            <div className="flex justify-between flex-col items-left gap-1  ">
                <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-4 w-4 text-black cursor-pointer"/>
                    <p className="text-sm font-light">{date}</p>
                </div>
                <div className="flex items-center gap-2">
                    <ShoppingBagIcon className="h-4 w-4 text-black cursor-pointer"/>
                    <p className="text-sm font-light">Items: {items}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-2xl font-medium ml-4">${price}</p>
                <Link key={index} to={`/MyOrders/${index}`}>
                    <ChevronDoubleRightIcon className="h-4 w-4 text-black cursor-pointer"/>
                </Link>
            </div>
        </div>
    )
}

export default OrdersCard