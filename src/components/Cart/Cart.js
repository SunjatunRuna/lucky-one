import React from 'react';

const Cart = ({cart}) => {
    const {name, img} = cart;

    return (
        <div>
            <p>{cart.length}</p>
            <p>{name}</p>
        </div>
    );
};

export default Cart;