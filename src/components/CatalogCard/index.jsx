import React from "react";
import PropTypes from "prop-types";

CatalogCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default function CatalogCard(props) {
  const { src, alt, title, width, height } = props;
  return (
    <div
      className="catalog-card"
      style={{
        width: width,
        height: height,
      }}
    >
      <img className="catalog-card__image" src={src} alt={alt} />
      <div className="catalog-card__title">
        <span>{title}</span>
      </div>
    </div>
  );
}
