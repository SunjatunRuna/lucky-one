import React from 'react';

const Cart = ({cart}) => {
    const {name, img} = cart;
    return (
        <div className='card d-block'>
           <img src={img} alt="" className='w-25' />
           <p>{name}</p>
        </div>
    );
};

export default Cart;