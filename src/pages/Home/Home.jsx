import { useState, useEffect, useContext } from "react"
import Layout from "../../components/Layout/Layout"
import Card from "../../components/Card/Card"
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import { ShopingCartContext } from "../../context/ShopingCartContext"


function Home(){
    const context = useContext(ShopingCartContext)

    return(
        <Layout>
            <div className="flex items-center justify-center w-80">
                <h1>Exclusive Products</h1>
            </div>
            <input type="text" placeholder="Type to search..." className="w-80 p-4 m-4 rounded-lg border border-black" onChange={(event) => {
                context.setSearchValue(event.target.value)
            }}/>
            <div className="grid gap-4 grid-cols-4">
            {context.filteredProducts?.map(product => {
                return <Card key={product.id} data={product}/>
            })}
            </div>
            <ProductDetail></ProductDetail>
        </Layout>
    )
}

export default Home