import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        // console.log('item added' ,id);
        // localStorage.setItem(id, 1);
        addToDb(id);
    }
    // const addToCartWithParam = () => addToCart(id);

    const removeFromCart = id => {
        // console.log('removing', id);
        removeFromDb(id)
    }

    return (
        <div className='product'>
            <h2> Buy this: {name}</h2>
            <p> Only for: ${price}</p>
            <p><small> It has id: {id}</small></p>
            <button onClick={() => addToCart(id)}> Add To Cart </button>
            <button onClick={() => removeFromCart(id)}> Remove </button>
        </div>
    );
};

export default Cosmetic;