import React from 'react';

const AddToCart = React.memo(({ onAddToCart }) => {
  const handleClick = () => {
    if (onAddToCart) {
      onAddToCart();
    }
  };

  return (
    <button onClick={handleClick}>Add to Cart</button>
  );
});

export default AddToCart;
