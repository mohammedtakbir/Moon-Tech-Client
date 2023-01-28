import React from "react";
import { useProducts } from "../context/ProductProvider";
import ProductCard from '../components/ProductCard';

const Home = () => {

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
    status = products.map((product, i) => <ProductCard key={i} product={product} />)
  }

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {status}
      </div>
    </>
  );
};

export default Home;
