import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const eventHandler = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        <img src={product.img} alt="" />
    }
    return (
        <div className='container row mt-5'>
            <div className='col-lg-9'>
                <div className='row row-cols-3'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product = {product}
                        eventHandler = {eventHandler}
                        ></Product>)
                }
                </div>
            </div>
            <div className='col-lg-3'>
                <p>Another part</p>
                <p>Selected Items: 
                    <Cart 
                    key={cart.id}
                    cart={cart}></Cart>
                    </p>
            </div>
        </div>
    );
};

export default Shop;