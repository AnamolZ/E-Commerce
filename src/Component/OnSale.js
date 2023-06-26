import React from 'react';
import { Link } from 'react-router-dom';
import './OnSale.css';
import AddtoCart from './AddtoCart';

function OnSale(props) {
  const { itemname, price, img, cartCount, setCartCount, onClick } = props;
  const trimmedItemName = itemname.slice(0, -1);
  const itemId = itemname.toLowerCase().replace(/\s/g, '-');
  let lastElements = itemname.charAt(itemname.length - 1);

  const addToCartHandler = () => {
    setCartCount(cartCount + 0);
    onClick();
    console.log(`Added "${itemname}" to the cart.`);
  };

  return (
    <div className="Saleshot">
      <img className="imgsaleshot" src={img} alt={itemname} />
      <Link to={`/details/${itemId}/${lastElements}`} className="description">
        {trimmedItemName}
      </Link>
      <p className="price">{price}</p>
      <div className="add-to-cart-container">
        <AddtoCart onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
}

export default OnSale;
