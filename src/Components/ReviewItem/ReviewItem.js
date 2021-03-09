import React from 'react';
import Cart from '../Cart/Cart';

const ReviewItem = (props) => {
    const { name, quantity, key, img, price } = props.product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className="product-name">{name}</h4>
                <p>Quantity: {quantity}</p>
                <p>Price: ${price}</p>
                <button onClick={() => props.removeProduct(key)} className='main-button'>
                    Remove</button>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ReviewItem;