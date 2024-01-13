import { useContext } from "react"
import { ShopingCartContext } from "../../context/ShopingCartContext"
import Layout from "../../components/Layout/Layout"
import OrderCard from "../../components/OrderCard/OrderCard"

function MyOrder(){
    const context = useContext(ShopingCartContext)
    return(
        <Layout>
            <div className='m-4 flex flex-col w-100'>
                {context.orders[context.orders.length-1]?.items.map(product => {
                    return(<OrderCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}></OrderCard>)
                })}
            </div>
        </Layout>
    )
}

export default MyOrder