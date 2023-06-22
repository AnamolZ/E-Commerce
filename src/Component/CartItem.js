import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Cart from './Cart';
import productData from '../productData.json';

const productCache = {};

function CartItem() {
  const { id } = useParams();

  const getProductById = useMemo(() => {
    if (productCache[id]) {
      return productCache[id];
    }

    const product = productData.find((product) => product.id === Number(id));

    if (product) {
      productCache[id] = product;
    }

    return product;
  }, [id]);

  if (!getProductById) {
    return <div>Product not found</div>;
  }

  return <Cart key={getProductById.id} {...getProductById} />;
}

export default CartItem;
