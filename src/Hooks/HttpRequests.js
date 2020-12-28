import React, { useState, useEffect } from 'react';
import axios from 'axios';



export function useAxiosGet(url) {

    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(()=> {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            if (!response || response === "Not found!") {
                setRequest({
                    loading: false,
                    data : null,
                    error: true});
            } else {
                console.warn(response.data);
                setRequest({
                    loading: false,
                    data: response.data
                });
            }
        }).catch((ex) => {
            setRequest({
                    loading: false,
                    data : null,
                    error: true})
        });
    }, [url]);

    return request;
}
