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
    }
    const rejectedProduct = () => setCart([]);
    const chooseOne = () =>{
    const choose = cart[Math.floor(Math.random()*cart.length)];
    console.log(choose);
    }
    return (
        <div className='container row mt-5'>
            <div className='col-lg-9'>
                <div className='row row-cols-lg-3 row-cols-sm-1 mb-3'>
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
                <div className='ms-4'><span className='fw-bold'>Selected Items:</span> 
                    {
                        cart.map((item) => (
                            <div className='row border border-mute mt-4 mb-2' key={item.id}>
                                <div className='col-4'>
                                <img src={item.img} alt="" className='w-100 img-fluid'/>
                                </div>
                                <div className='col-6'><p className='px-2'>
                                {item.name}
                            </p></div>
                            <div className='col-2'><i className="fa-solid fa-trash text-end"></i></div>
                            </div>
                        ))
                    }
                    </div>
                    <div className='d-flex w-100'>
                    <button onClick={chooseOne} className='border border-none w-50 ms-2 py-2'>Select</button>
                    <button onClick={rejectedProduct} className='border border-none ms-2 w-50 py-2'>Reject</button>
                    
                    </div>
            </div>
        </div>
    );
};

export default Shop;