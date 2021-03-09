import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import pic from '../../images/giphy.gif';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const removeProduct = product => {
        const newCart = cart.filter(pd => pd.key !== product);
        setCart(newCart);
        removeFromDatabaseCart(product);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        console.log(productKey);
    }, [])

    const handlePlaceOrder=()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    let thankYou;
    if(orderPlaced){
        thankYou= <img src={pic} alt=""/>
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {cart.map(pd => <ReviewItem
                    product={pd}
                    removeProduct={removeProduct}
                >
                </ReviewItem>)}
                {
                    thankYou
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>

    );
};

export default Review;