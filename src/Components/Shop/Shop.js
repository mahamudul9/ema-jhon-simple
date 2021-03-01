import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [product, setProduct] = useState(firstTen);
    const [cart, setCart]=useState([]);
    const [price,setPrice]= useState([]);
    const handleAddProduct=(product)=>{
        console.log('product added',product);
        const newCart=[...cart,product];
        setCart(newCart);
        const newPrice=[...price,product.price];
        setPrice(newPrice);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">            
                    {product.map(element => <Product product={element}  handleAddProduct={handleAddProduct}></Product>)}         
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;