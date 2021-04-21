
import {Link} from 'react-router-dom';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { ListProducts } from '../actions/productActions';
import  { useState, useEffect } from 'react';

function LogInScreen(props){
    const productList=  useSelector(state => state.productList);
     const {products, loading, error}= productList;
     const dispatch=  useDispatch();
     useEffect(() => {
         dispatch(ListProducts());
         return () => {
         }
     }, []);

    return  loading? <div>Loading...</div>:
    error? <div>{error}</div>:
    <div>
        
        <div className="login">
        UserName:<br />
    Password:
    </div>
    <button className="loginbutton">Log In</button>
    <script></script>
    </div>

}

export default LogInScreen;