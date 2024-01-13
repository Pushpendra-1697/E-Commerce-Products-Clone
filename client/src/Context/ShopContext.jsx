import React, { createContext, useEffect, useState } from "react";
import { backendURL } from "../backendurl";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_product, setAllProduct] = useState([]);

    useEffect(() => {
        fetch(`${backendURL}/allproducts`).then((res) => res.json()).then((data) => setAllProduct(data.products));
        if (localStorage.getItem('auth-token')) {
            fetch(`${backendURL}/getcart`, {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: "",
            }).then((res) => res.json()).then((data) => setCartItems(data));
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch(`${backendURL}/addtocart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({ itemId })
            }).then((res) => res.json()).then((data) => console.log(data));
        }
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch(`${backendURL}/removefromcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({ itemId })
            }).then((res) => res.json()).then((data) => console.log(data));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === +item);
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;