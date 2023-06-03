// eslint-disable-next-line
import React, { useState } from 'react';
import './OnSale.css';
import AddtoCart from './AddtoCart';
import { NavLink } from 'react-router-dom';

function OnSale(props) {
  const { itemname, price, img, cartCount, setCartCount, onClick } = props;
  const trimmedItemName = itemname.slice(0, -1);

  const addToCartHandler = () => {
    setCartCount(cartCount + 1);
    onClick();
  };

  return (
    <div className="Saleshot">
      <img className="imgsaleshot" src={img} alt={itemname} />
      <NavLink to={itemname}>
        <p className="description">{trimmedItemName}</p>
      </NavLink>
      <p className="price">{price}</p>
      <div className="add-to-cart-container">
        <AddtoCart onAddToCart={addToCartHandler} />
      </div>
      <nav>
        <ul>
          <li>
            <div className="cart-count">{cartCount}</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default OnSale;
