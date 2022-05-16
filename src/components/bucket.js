import React from 'react';
import images from "../images/index";

function Bucket() {
  return (
    <div className="bucket">
      <a href="/bucket" style={{textDecoration: 'none'}}>
        <div className="bucket-icon">
          <img className="bucket-icon-x" src={images.sepetIcon} alt="sepetIcon" ></img>
        </div>
        <div className="bucket-text">Sepetim</div>
      </a>
    </div>
  )
}

export default Bucket