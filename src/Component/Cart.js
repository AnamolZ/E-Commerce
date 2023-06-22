import React from 'react';
import './Cart.css';
import { useClickCounter } from './ClickCounter';

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
  const { handleClick } = useClickCounter();
  const [mainImageSrc, setMainImageSrc] = React.useState(props.src[0]);

  const changeImage = (src) => {
    setMainImageSrc(src);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6 border-end">
            <div className="d-flex flex-column justify-content-center">
              <MainImage src={mainImageSrc} />
              <div className="thumbnail_images">
                <ul id="thumbnail">
                  {props.src.map((src, index) => (
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
                <h3 className="h3pname">{props.productname}</h3>
                <span className="heart">
                  <i className="bx bx-heart"></i>
                </span>
              </div>
              <h3 className="h3price">{props.price}</h3>
              <div className="ratings d-flex flex-row align-items-center">
                <div className="d-flex flex-row">
                  {[...Array(4)].map((_, index) => (
                    <i key={index} className="bx bxs-star"></i>
                  ))}
                  <i className="bx bx-star"></i>
                </div>
                <span className="spanprev">{props.productreview}</span>
              </div>
              <div className="product-details">
                <b>Product Details</b>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    <p className="details">{props.aboutproduct}</p>
                  </li>
                  <li>
                    <p className="details">{props.minidetails}</p>
                  </li>
                </ul>
              </div>
              <div className="buttons d-flex flex-row mt-5 gap-3">
                <button className="btn btn-outline-dark">Buy Now</button>
                <button className="btn btn-dark" onClick={handleClick}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
