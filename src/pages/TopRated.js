import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
    const { state: data } = useProducts();

    const { products, loading, error } = data;

    let status;

    if (loading) {
        status = <p>Loading...</p>
    }
    if (error) {
        status = <p>Something went wrong</p>
    }
    if (!loading && !error && !products.length === 0) {
        status = <p>Products list is empty</p>
    }
    if (!loading && !error && products.length) {
        // const topRated = products.filter(product => product.rating >= 4)
        status = products.filter(product => product.rating >= 4).map((product, i) => <ProductCard key={i} product={product} />)
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {status}
        </div>
    );
};

export default TopRated;
