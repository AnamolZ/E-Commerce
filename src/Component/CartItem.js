import React from 'react';
import { useParams } from 'react-router-dom';
import Cart from './Cart';
import productData from '../productData.json';

function CartItem() {
  const { id } = useParams();
  const product = productData.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <Cart key={product.id} {...product} />;
}

export default CartItem;
