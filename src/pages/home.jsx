import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            if (data && data.length > 0) {
                setLoading(false)
                setError(null)
                setProducts(data)
            }
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (error) {
        return (<h3>There was an error. {error}</h3>)
    }

    return (<div>
        {
            loading ?
                <div className='min-h-screen w-full flex justify-center items-center'>
                    <Circles height={'120'} width={'120'} color='rgb(127,29,29)' visible={true} />
                </div> :

                <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3'>
                    {
                        products && products.length ?
                            products.map(productItem => (
                                <ProductTile product={productItem} />
                            ))
                            : null
                    }
                </div>
        }
    </div>)
};

export default Home;