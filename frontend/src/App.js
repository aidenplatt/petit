import React from 'react';
import './App.css';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LogInScreen from './screens/LogInScreen';
import CartScreen from './screens/CartScreen';

function App() {
  const openBar = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeBar= () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  
    return (
    <BrowserRouter> 
    <div className="grid-container">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine" />
    <header className="header">
    <div className="brand"> 
        <button onClick={openBar}>
            &#9776;
        </button>
        <Link to="/HomeScreen">petite</Link>
        
    </div>
    <div className="header-links">
        <a href="cart.html">Cart </a>
        <Link to="/">Log Out</Link>
    
    </div>

    </header>
    <aside className="sidebar"> 
        <h3>Shopping categories</h3>
        <button className="sideBar-close" onClick={closeBar}>X</button>
        <ul>
            <li><a href="dresses.html">dresses</a></li>
            <li><a href="shoes.html">Shoes</a></li>
            <li><a href="bags.html">Bags</a></li>
        </ul>
    </aside>
    
    <main className="main"> 
    <div className="content">
    <Route path="/product/:id" component={ProductScreen} />
    <Route path="/"  exact={true} component={LogInScreen} />
    <Route path="/HomeScreen"   component={HomeScreen} />
    <Route path="/cart/:id?" component={CartScreen} />
        
    </div>
    </main>
    <footer className="footer">
        All rights resereved to Aiden Platt and Sean Shvarzman
    </footer>
</div>
</BrowserRouter>
  );
}


export default App;
