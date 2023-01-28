import React, { createContext, useEffect, useState } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { actionsType } from '../state/ProductState/ActionsType';
import { initialState, productReducer } from '../state/ProductState/ProductReducer';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState);
    console.log(state)

    useEffect(() => {
        dispatch({ type: actionsType.FETCHING_START })
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => dispatch({ type: actionsType.FETCHING_SUCCESS, payload: data }))
            .catch(err => dispatch({ type: actionsType.FETCHING_ERROR, payload: err.message }))
    }, [])

    const data = {
        state,
        dispatch
    }

    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    return context;
}

export default ProductProvider;