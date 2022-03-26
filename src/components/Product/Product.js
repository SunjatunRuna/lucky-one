import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, eventHandler} = props;
    const {name, img, price} = product;
    return (
        <div className='product text-secondary border border-mute mx-auto'>
            <img src={img} alt="" className='img-fluid' />
            <h5 className='text-start pt-2 ps-2'>{name}</h5>
            <p className='text-start fw-bold ps-2 pb-5'>Price: ${price}</p>
            <button onClick={() => eventHandler(product)} className='border border-none border-radius w-100 p-2 btn-cart'>
                Add Cart<i className='fa-solid fa-cart-plus ps-2'></i></button>
        </div>
    );
};

export default Product;