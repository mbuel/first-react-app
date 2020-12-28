import React from 'react';

import { useAxiosGet } from '../Hooks/HttpRequests';

import Loading from '../Components/Loader';
import ProductCard from '../Components/ProductCard';

function Home() {

    const url = `https://5fd9442a7e05f000170d369c.mockapi.io/api/v1/products?page=1&limit=10`;
    
    let products = useAxiosGet(url);

    let content = null;

    if (products.error) {
        content = <p>
            There was an error in retrieving the data - please refresh the page or try a different ID.
        </p>
    }

    if (products.loading) {
        content = <Loading />
    } 
    
    if (products.data != null) {
        content = 
        products.data.map((product) => 
            <div key={product.id}>
                <ProductCard
                    product={product}
                />
            </div>
        );

    }

    return (
        <div>
            <h1 className="font-bold text-2x1">Welcome to the page of best sellers.</h1>

            {content}
        </div>
    )
}

export default Home;