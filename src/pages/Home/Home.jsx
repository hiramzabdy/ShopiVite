import { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import Card from "../../components/Card/Card"
import ProductDetail from "../../components/ProductDetail/ProductDetail"

function Home(){
    const [platziProducts, setPlatziProducts] = useState(null)
    const [fakeStoreProducts, setFakeStoreProducts] = useState(null)
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setPlatziProducts(data))
    }, [])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setFakeStoreProducts(data))
    }, [])

    return(
        <Layout>
            <div className="grid gap-4 grid-cols-4">
            {fakeStoreProducts?.map(product => {
                return <Card key={product.id} data={product}/>
            })}
            </div>
            <ProductDetail></ProductDetail>
        </Layout>
    )
}

export default Home