import { useParams } from "react-router-dom";
import type { Product } from "../../types/product";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";



const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const URL = `http://localhost:3000/products/${id}`;

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                setLoading(true);
                const response = await axios.get(URL);
                setProduct(response.data);
            } catch (err) {
                toast.error("Failed to fetch product details");
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchProductById();
    }, [id]);



    return (
        <>
            <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
                <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Product Details
                    </h1>

                    {loading ? (
                        <p className="text-center text-gray-500 animate-pulse">
                            Loading product...
                        </p>
                    ) : product ? (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {product.name}
                            </h2>

                            <div className="flex justify-between items-center border-t pt-4">
                                <span className="text-gray-600 font-medium">Price</span>
                                <span className="text-lg font-semibold text-green-600">
                                    ${product.price}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">Stock</span>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${Number(product.stock) > 0
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {Number(product.stock) > 0 ? "In Stock" : "Out of Stock"}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-red-500 font-medium">
                            Product not found.
                        </p>
                    )}
                </div>
            </div>

        </>
    )
}

export default ProductDetail