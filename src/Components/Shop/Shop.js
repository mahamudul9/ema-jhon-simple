import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [product, setProduct] = useState(firstTen);
    const [cart, setCart]=useState([]);
    const [price,setPrice]= useState([]);

    useEffect(()=>{
        const savedCart= getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const previousCart = productKey.map(key=>{
        const product = fakeData.find(element=> element.key===key);
        product.quantity = savedCart[key]; 
        return product;
        })
        setCart(previousCart);
    }, [])

    const handleAddProduct=(product)=>{
        const toBeAddedKey= product.key;
        const sameProduct= cart.find(pd=> pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            const count= sameProduct.quantity+1
            sameProduct.quantity= count;
            const others= cart.filter(pd=> pd.key !==toBeAddedKey );
            newCart=[...others, sameProduct];
        }
        else{
            product.quantity=1;
            newCart=[...cart,product];
        }
        setCart(newCart);
        const newPrice=[...price,product.price];
        setPrice(newPrice);

        addToDatabaseCart(product.key,count);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">            
                    {product.map(element => <Product product={element} showAddtoCart={true} handleAddProduct={handleAddProduct} ></Product>)}         
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <Link to ='/review'><button className='main-button'>Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;