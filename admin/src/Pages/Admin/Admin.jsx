import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import AddProdcut from '../../Components/AddProduct/AddProdcut';
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
    return (
        <div className='admin'>
            <Sidebar />
            <Routes>
                <Route element={<AddProdcut />} path='/addproduct'></Route>
                <Route element={<ListProduct />} path='/listproduct'></Route>
            </Routes>
        </div>
    );
}

export default Admin;