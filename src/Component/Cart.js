import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './Cart.css';
import AddtoCart from './AddtoCart';
import productData from '../productData.json';

const productCache = {};

const MainImage = ({ src }) => (
  <div className="main_image">
    <img src={src} id="main_product_image" width="350" alt="Main Product" />
  </div>
);

const ThumbnailImage = ({ src, onClick }) => (
  <li>
    <img onClick={onClick} src={src} width="70" alt="Thumbnail" />
  </li>
);

const Cart = (props) => {
  const { id } = useParams();

  const [mainImageSrc, setMainImageSrc] = useState('');

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

  const changeImage = (src) => {
    setMainImageSrc(src);
  };

  const {cartCount, setCartCount, onClick } = props;

  const addToCartHandler = () => {
    setCartCount(cartCount + 0);
    onClick();
    console.log(`Added "${getProductById.productname}" to the cart.`);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6 border-end">
            <div className="d-flex flex-column justify-content-center">
              <MainImage src={mainImageSrc || getProductById.src[0]} />
              <div className="thumbnail_images">
                <ul id="thumbnail">
                  {getProductById.src.map((src, index) => (
                    <ThumbnailImage
                      key={index}
                      src={src}
                      onClick={() => changeImage(src)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 right-side">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="h3pname">{getProductById.productname}</h3>
                <span className="heart">
                  <i className="bx bx-heart"></i>
                </span>
              </div>
              <h3 className="h3price">{getProductById.price}</h3>
              <div className="ratings d-flex flex-row align-items-center">
                <div className="d-flex flex-row">
                  {[...Array(4)].map((_, index) => (
                    <i key={index} className="bx bxs-star"></i>
                  ))}
                  <i className="bx bx-star"></i>
                </div>
                <span className="spanprev">{getProductById.productreview}</span>
              </div>
              <div className="product-details">
                <b>Product Details</b>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    <p className="details">{getProductById.aboutproduct}</p>
                  </li>
                  <li>
                    <p className="details">{getProductById.minidetails}</p>
                  </li>
                </ul>
              </div>
              <div className="buttons d-flex flex-row mt-5 gap-3">
                <button className="btn btn-outline-dark">Buy Now</button>
                <div className="btn btn-dark">
                  <AddtoCart onAddToCart={addToCartHandler} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
