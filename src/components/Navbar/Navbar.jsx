import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShopingCartContext } from "../../context/ShopingCartContext"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'


function Navbar(){
    const activeStyle = "underline underline-offset-4"
    const context = useContext(ShopingCartContext)

    return(
        <nav className="flex justify-between items-center fixed z-10 w-full py-4 px-4 text-sm font-light top-0 bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg"><NavLink to={"/"} className={({isActive }) => isActive ? activeStyle : undefined }>Shopi</NavLink></li>
                <li><NavLink to={"/All"} className={({isActive }) => isActive ? activeStyle : undefined }>All</NavLink></li>
                <li><NavLink to={"/Clothes"} className={({isActive }) => isActive ? activeStyle : undefined }>Clothes</NavLink></li>
                <li><NavLink to={"/Electronics"} className={({isActive }) => isActive ? activeStyle : undefined }>Electronics</NavLink></li>
                <li><NavLink to={"/Furnitures"} className={({isActive }) => isActive ? activeStyle : undefined }>Furnitures</NavLink></li>
                <li><NavLink to={"/Toys"} className={({isActive }) => isActive ? activeStyle : undefined }>Toys</NavLink></li>
                <li><NavLink to={"/Others"} className={({isActive }) => isActive ? activeStyle : undefined }>Others</NavLink></li>
            </ul>
            <ul className="flex items-center gap-5">
                <li className="text-black/60">email@example.com</li>
                <li><NavLink to={"/MyOrders"} className={({isActive }) => isActive ? activeStyle : undefined }>My Orders</NavLink></li>
                <li><NavLink to={"/MyAccount"} className={({isActive }) => isActive ? activeStyle : undefined }>My Account</NavLink></li>
                <li><NavLink to={"/SignIn"} className={({isActive }) => isActive ? activeStyle : undefined }>Sign In</NavLink></li>
                <li className="flex items-center cursor-pointer"><ShoppingBagIcon className="h-6 w-6 text-black" onClick={()=>{
                    context.isCartOpen? context.closeCart() : context.openCart()
                }}></ShoppingBagIcon><div>{context.cartProducts.length}</div></li>
            </ul>
        </nav>
    )
}

export default Navbar