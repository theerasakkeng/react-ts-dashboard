import { FC, useState, ReactNode } from "react";
import "./ProductCard.css";
import { height } from "@mui/system";

import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating";

const ProductCard: FC<{ productData: any }> = ({ productData }) => {
  const imgHeight = 150;
  return (
    <div className="card-product-wrap">
      <div
        style={{
          backgroundImage: `url(${productData.image})`,
          height: `${imgHeight}px`,
        }}
        className="img-header-wrap"
      >
        <div className="full-img">
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
  );
};

export default ProductCard;
