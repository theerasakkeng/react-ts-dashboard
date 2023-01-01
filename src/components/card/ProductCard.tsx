import { FC, useState, MouseEvent } from "react";
import "./ProductCard.css";

import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating";

const ProductCard: FC<{
  productData: any;
}> = ({ productData }) => {
  const imgHeight = 150;
  const [showFullImage, setShowFullImage] = useState<boolean>(false);

  const setUrlImage = () => {
    setShowFullImage((prev) => !prev);
  };

  return (
    <>
      <div className="card-product-wrap">
        <div
          style={{
            backgroundImage: `url(${productData.image})`,
            height: `${imgHeight}px`,
          }}
          className="img-header-wrap"
        >
          <div className="full-img" onClick={setUrlImage}>
            <ZoomInIcon />
          </div>
        </div>
        <div
          style={{ height: `calc(100% - ${imgHeight}px)` }}
          className="detail-product-wrap"
        >
          <div className="detail-product-top-section">
            <div className="line-section-wrap">
              <div className="line-section"></div>
            </div>
            <div className="prize-wrap">
              <div className="prize">{`$${productData.price}`}</div>
            </div>
            <Tooltip title={productData.title} placement="bottom">
              <div className="product-title">{productData.title}</div>
            </Tooltip>
          </div>
          <div className="rating-wrap">
            <Rating
              name="read-only"
              value={productData.rating.rate}
              readOnly
              size="small"
            />
            <span>{`(${productData.rating.count})`}</span>
          </div>
        </div>
      </div>
      {showFullImage && (
        <div className="full-image-blackdrop">
          <div className="image-wrap">
            <img src={productData.image} width="70%" />
            <div className="close-button" onClick={setUrlImage}>
              <CloseIcon sx={{color:"#ffffff"}}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
