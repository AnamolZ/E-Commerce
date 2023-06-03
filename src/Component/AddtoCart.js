import React from 'react';

function AddtoCart(props) {
  const handleClick = () => {
    if (props.onAddToCart) {
      props.onAddToCart();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default AddtoCart;
