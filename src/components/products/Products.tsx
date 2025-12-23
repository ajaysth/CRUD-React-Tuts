import { useEffect, useState } from "react";
import axios from "axios";
import ProductLists from "./ProductLists";
import { Link } from "react-router-dom";


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

            <div className="mt-10 flex flex-col items-center">
                <Link
                    to="/products/add-product"
                    className="mb-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
                >
                    Add Product
                </Link>

                <div className="w-full max-w-4xl">
                    <ProductLists products={products} loading={loading} />
                </div>
            </div>


        </>
    )
}

export default Products