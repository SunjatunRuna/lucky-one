import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

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
        console.log(newCart)
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
                <p>Selected Items: 
                    {
                        cart.map((item) => (
                            <div className='d-flex my-2'>
                                <img src={item.img} alt="" className='w-25'/>
                                <p className='ps-2' key={item.id}>
                                {item.name}
                            </p>
                            </div>
                        ))
                    }
                    </p>
                    <button className='border border-none py-2 me-1'>Choose One</button>
                    <button className='border border-none py-2'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;