import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Component/Navigation';
import Ads from './Component/Ads';
import Bottom from './Component/Bottom';
import data from './database.json';
import Trending from './Component/Trending';
import OnSale from './Component/OnSale';
import CartItem from './Component/CartItem';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCartHandler = (itemId) => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <Router>
      <div className="head">
        <Navigation />
        <div className="body">
          <Routes>
            <Route path="/details/:itemName/:id" element={<CartItem />} />
            <Route
              path="/"
              element={
                <>
                  <Trending />
                  <div className="container">
                    <ul className="items">
                      {data.images.map(item => (
                        <li key={item.id}>
                          <OnSale
                            itemname={item.itemname}
                            price={`Rs ${item.price}`}
                            img={item.img}
                            cartCount={cartCount}
                            setCartCount={setCartCount}
                            onClick={() => addToCartHandler(item.id)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ads">
                    <Ads />
                  </div>
                </>
              }
            />
          </Routes>
          <div className="bottom">
            <Bottom />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
