import React from 'react';
import './SideImage.css';

function SideImage(props) {
  return (
    <div className="side-image">
      <div className="view overlay zoom">
        <img src={props.img} className="img-fluid" alt={props.alt} />
        <div className="mask flex-center">
          <p className="white-text">Zoom effect</p>
        </div>
      </div>
    </div>
  );
}

export default SideImage;