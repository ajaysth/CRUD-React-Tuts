import { useEffect, useState } from "react";
import axios from "axios";
import ProductLists from "./ProductLists";

interface Product {
    id: string;
    name: string;
    price: string;
    stock: string;
}

const Products = () => {
    const URL = "http://localhost:3000/products"

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Product[]>(URL)
                setProducts(response.data)
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }

        }

        fetchProducts();


    }, [])
    return (
        <>
            <div className='mt-10 text-center'>
                <ProductLists products={products} loading={loading} />
            </div>
        </>
    )
}

export default Products