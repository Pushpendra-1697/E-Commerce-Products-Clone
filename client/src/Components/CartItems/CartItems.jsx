import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-formate-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quentity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((ele) => {
                if (cartItems[ele.id] > 0) {
                    return (
                        <div key={ele.id}>
                            <div className="cartitems-formate cartitems-formate-main">
                                <img src={ele.image} className='carticon-product-icon' alt='' />
                                <p>{ele.name}</p>
                                <p>${ele.new_price}</p>
                                <button className='cartitems-quentity'>{cartItems[ele.id]}</button>
                                <p>${ele.new_price * cartItems[ele.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(ele.id)} alt='' />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-items'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-items'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type='text' placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;