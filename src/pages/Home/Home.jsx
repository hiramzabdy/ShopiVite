import { useState, useEffect, useContext } from "react"
import Layout from "../../components/Layout/Layout"
import Card from "../../components/Card/Card"
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import { ShopingCartContext } from "../../context/ShopingCartContext"


function Home(){
    const context = useContext(ShopingCartContext)
    const currentPath = window.location.pathname
    const currentCategory = currentPath.substring(currentPath.lastIndexOf("/")+1)
    const categories = {
        "men's clothing": "Clothes",
        "women's clothing": "Clothes",
        "jewelery": "Jewelery",
        "electronics": "Electronics",
        "toys": "Toys",
        "other": "Others"
    }

    const productsToShow = context.filteredProducts?.filter(product => {
        if(currentCategory == "" || currentCategory == "All"){
            return product
        }else if(categories[product.category] == currentCategory){
            return product
        }
    }) || []
    const noProducts = productsToShow.length === 0

    return(
        <Layout>
            <div className="flex items-center justify-center w-80">
                <h1>Exclusive Products</h1>
            </div>
            <input type="text" placeholder="Type to search..." className="w-80 p-4 m-4 rounded-lg border border-black" onChange={(event) => {
                context.setSearchValue(event.target.value)
            }}/>{
                noProducts ? 
                    <div className="flex items-center justify-center w-80 m-8 font-light">
                    <h1 className="text-xl">There's no products in this category</h1>
                    </div>
                : 
                    <div className="grid gap-4 grid-cols-4">
                        {productsToShow?.map(product => <Card key={product.id} data={product}></Card>)}
                    </div>
            }
            <ProductDetail></ProductDetail>
        </Layout>
    )
}

export default Home