import React, { useState, useEffect } from 'react';
// import { withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Components/Loader';


function Product(props) {
    const { id } = useParams();
    let index = id;
    if (isNaN(index)) {
         index = 1;
    }

    console.warn(useParams());
    console.warn(`SET ID: ${index}`);
    const url = `https://5fd9442a7e05f000170d369c.mockapi.io/api/v1/products/${index}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    });

    let content = null;

    useEffect(()=> {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            if (!response || response === "Not found!") {
                setProduct({
                    loading: false,
                    data : null,
                    error: true});
            } else {
                console.warn(response.data);
                setProduct({
                    loading: false,
                    data: response.data
                });
            }
        }).catch((ex) => {
            setProduct({
                    loading: false,
                    data : null,
                    error: true})
        });
    }, [url]);

    if (product.error) {
        content = <p>
            There was an error in retrieving the data - please refresh the page or try a different ID.
        </p>
    }

    if (product.loading) {
        content = <Loading />
    } 
    
    if (product.data != null) {
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.image}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                {product.data.description}
            </div>
            <div className="font-bold text-xl mb-3">
                {product.data.price}
            </div>
        </div>

    }
    return (
        <div>
            {content}
        </div>

        
    );
}

export default Product;