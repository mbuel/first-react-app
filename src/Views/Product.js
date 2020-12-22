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
        data: null
    });

    let content = '';

    useEffect(()=> {
        setProduct({
            loading: true,
            data: null
        })
        axios.get(url)
        .then(response => {
            if (!response || response === "Not found!") {
                setProduct({
                    loading: false,
                    data : {
                        name: "ERROR ID NOT FOUND",
                        image: '',
                        description: "error!"}});
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
                data : {
                    name: "ERROR ID NOT FOUND",
                    image: '',
                    description: "error!"}});
        });
    }, [url]);

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