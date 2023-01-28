import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const WishList = () => {

    const { state: { wishList, loading, error } } = useProducts();

    let content;

    if (loading) {
        content = <p>Loading...</p>
    } else if (error) {
        content = <p className='text-red-500'>Something went wrong...</p>
    } else if (!loading && !error && wishList.length === 0) {
        content = <p>You have no wish list products</p>
    } else if (!loading && !error && wishList.length) {
        content = wishList.map((product, i) => <ProductCard key={i} product={product} />)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {content}
        </div>
    );
};

export default WishList;