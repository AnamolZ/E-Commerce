import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Component/Navigation';
import Ads from './Component/Ads';
import Bottom from './Component/Bottom';
import data from './database.json';
import Trending from './Component/Trending';
import OnSale from './Component/OnSale';
import Cart from './Component/Cart';
import productData from './productData.json';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [desiredProduct, setDesiredProduct] = useState(null);

  const addToCartHandler = (itemId) => {
    setCartCount((prevCount) => prevCount + 1);
    console.log(`Item ID ${itemId} added to cart`);
  };

  useEffect(() => {
    const updateDesiredProduct = () => {
      const currentURL = window.location.href;
      const url = new URL(currentURL);
      const lastSegment = url.pathname.split('/').pop();
      const lastLetter = lastSegment.charAt(lastSegment.length - 1);
      const lastLetterAsInt = parseInt(lastLetter);
      console.log(lastLetterAsInt);

      const desiredProductId = lastLetterAsInt;
      const product = productData.find((product) => product.id === desiredProductId);
      setDesiredProduct(product);
    };

    updateDesiredProduct();

    const intervalId = setInterval(updateDesiredProduct, 0);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Router>
      <div className="head">
        <Navigation />
        <div className="body">
          <Routes>
            <Route
              path="/:itemName"
              element={
                desiredProduct && (
                  <Cart
                    key={desiredProduct.id}
                    {...desiredProduct}
                  />
                )
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Trending />
                  <div className="container">
                    <ul className="items">
                      {data.images.map((item) => (
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
