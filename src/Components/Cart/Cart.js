import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart=props.cart;
    // const total= cart.reduce((total,element)=>total+element.price,0);
    let total=0;
    for(let i=0;i<cart.length;i++){
        const pd= cart[i];
        total=total+pd.price;
    }

    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }

    const tax=(total*0.1);

    const grandTotal=total+shipping+tax;

    const converter=num=>{
        const fix= num.toFixed(2);
        return Number(fix);
    }
    return (
        <div>
            <h2>Order summary</h2>
            <h3>Item ordered: {cart.length}</h3>
            <p>Items: ${total}</p>
            <p>Shipping: ${converter(shipping)}</p>
            <p>Tax: ${converter(tax)}</p>
            <p>Total: ${converter(grandTotal)}</p> 
        </div>
    );
};

export default Cart;