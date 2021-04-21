import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {detailsProduct}  from '../actions/productActions';




function ProductScreen(props) {
    const [qty, setQty]= useState(1); 
const productDetails= useSelector(state=>state.productDetails);
const {product, loading, error}= productDetails;
const dispatch = useDispatch();
useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
    }
}, []);


const AddToCart =()=> {
    props.history.push("/cart/"+props.match.params.id+"?qty="+qty)
    
}

    return <div>
        <div className="Back"><Link to="/HomeScreen">Back to results</Link></div>
        {loading ? <div>Loading...</div>:
        error ? <div>{error}</div>:
        (
        <div className="details">
            <div className="image">
                <img src={product.image} alt="product" />
            </div>
            <div className="info">
                <ul>
                    <li><h2>{product.name}</h2></li>
                    <li><b><h4>Description:</h4></b>
                            {product.description}
                    </li>
                </ul>
            </div>

            <div className="action">
            <ul>
            <li>Price: ${product.price} </li>
            <li>Status: {product.countInStock>0? "In stock": "Out of stock" }
            </li>
            <li>Qty <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
            {[...Array(product.countInStock).keys()].map(x=>
                <option key={x+1} value={x+1}>{x+1}</option>
                )}
            </select></li>
            <li>
            {product.countInStock>0 && <button onClick={AddToCart} className="button">Add to cart</button>
             }
         </li> 
            </ul>
            </div>
            <h1>{product.name}</h1>
        </div>
        
        )
        }
        </div>
        
}

export default ProductScreen;
