import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {name,img,seller,price,stock}=props.product;
    return (
        <div class='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <h4 class="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} items in the stock. Order Soon</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)}                         className='main-button'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;