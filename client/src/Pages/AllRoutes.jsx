import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from './Shop';
import ShopCategory from './ShopCategory';
import Product from './Product';
import Cart from './Cart';
import LoginSignup from './LoginSignup';
import men_banner from '../Components/Assets/banner_mens.png';
import women_banner from '../Components/Assets/banner_women.png';
import kid_banner from '../Components/Assets/banner_kids.png';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} ></Route>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />}></Route>
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} ></Route>
            <Route path='/' element={<Shop />}></Route>

            <Route path='/product' element={<Product />}>
                <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/login' element={<LoginSignup />}></Route>
        </Routes>
    );
}

export default AllRoutes;