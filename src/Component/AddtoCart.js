import React from 'react';
import './AddtoCart.css';

const AddToCart = React.memo(({ onAddToCart }) => {
  const handleClick = () => {
    if (onAddToCart) {
      onAddToCart();
    }
  };

  return (
    <button className="add-to-cart-button" onClick={handleClick}>
      Add to Cart
    </button>
  );
});

export default AddToCart;
