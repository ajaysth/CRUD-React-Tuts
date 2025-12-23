import { Link } from "react-router-dom";

interface Product {
    id: string;
    name: string;
    price: string;
    stock: string;
}
const ProductLists = ({ products, loading }: { products: Product[]; loading: boolean }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">

            {loading ? (
                <p className="text-lg font-medium text-gray-600 animate-pulse">
                    Loading products...
                </p>
            ) : (
                <ul className="w-full max-w-2xl space-y-4">
                    {products.map((product) => (
                        <li
                            key={product.id}
                            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <Link to={`/products/${product.id}`} className="block mb-2 text-blue-600 hover:underline">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {product.name}
                                </h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    )
}

export default ProductLists