import React, { useState } from "react";
import PropTypes from "prop-types";

ProductCard.propTypes = {
  flashSale: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  sold: PropTypes.number,
  salePercent: PropTypes.number,
  maxFlash: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

ProductCard.defaultProps = {
  flashSale: false,
  price: 10000,
  src: "https://picsum.photos/200",
  name: "Thao duoc tri mun [FREE SHIP] mieng lot mun han quoc chinh hang",
  sold: 50,
  salePercent: 30,
  maxFlash: 100,
};

function formatMoney(number) {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default function ProductCard(props) {
  const {
    width,
    height,
    src,
    alt,
    flashSale,
    name,
    price,
    sold,
    salePercent,
    maxFlash,
  } = props;
  const priceText = formatMoney(price);
  const [isShow, setShow] = useState(false);

  return (
    <div
      className="product-card-wrap"
      style={{ width: width, height: height }}
      onMouseMove={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div className="product-card">
        <div className="product-card__sale--percent--pop">
          <b>{`${salePercent}%`}</b>
        </div>
        <div className="product-card__image">
          <img src={src} alt={alt} />
        </div>
        <div
          className={
            flashSale
              ? "product-card__content--flash-sale"
              : "product-card__content--basic"
          }
        >
          <div
            className={
              flashSale
                ? "product-card__name--flash-sale"
                : "product-card__name--basic"
            }
          >
            <span>{name}</span>
          </div>
          <div
            className={
              flashSale
                ? "product-card__bottom--flash-sale"
                : "product-card__bottom--basic"
            }
          >
            <div>
              <span
                className={
                  flashSale
                    ? "product-card__price--flash-sale"
                    : "product-card__price--basic"
                }
              >
                {priceText}
              </span>
            </div>
            <div>
              {flashSale ? (
                <div className="product-card__progress">
                  <progress
                    className="product-card__progress-bar"
                    value={sold}
                    max={maxFlash}
                  />
                  <div>
                    <span>{`Đã bán ${sold}`}</span>
                  </div>
                </div>
              ) : (
                <span>{`Đã bán ${sold}`}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {!flashSale && (
        <div>
          {isShow && (
            <div className="product-card-find-more">
              <span>Tìm sản phẩm tương tự</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
