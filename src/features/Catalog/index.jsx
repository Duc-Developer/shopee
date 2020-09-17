import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import CatalogCard from "../../components/CatalogCard";

function importAll(r) {
  return r.keys().map(r);
}

const catalogLogos = importAll(
  require.context(
    "../../assist/images/catalog-images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default function Catalog(props) {
  const refEl = useRef(null);
  return (
    <div className="catalog-main">
      <div className="catalog-main__title">
        <h3>DANH MỤC</h3>
      </div>
      <div 
      ref={refEl} 
      className="catalog-main__catalog-list"
      >
        <div className="catalog-main__catalog-list--top">
          {catalogLogos.slice(0, 13).map((item, index) => {
            return (
              <div key={index}>
                <CatalogCard
                  width="10.3em"
                  height="13em"
                  src={item}
                  title="something"
                />
              </div>
            );
          })}
        </div>
        <div className="catalog-main__catalog-list--bottom">
          {catalogLogos.slice(13).map((item, index) => {
            return (
              <div key={index}>
                <CatalogCard
                  width="10.3em"
                  height="13em"
                  src={item}
                  title="something"
                />
              </div>
            );
          })}
        </div>
      </div>
      <LeftCircleOutlined
        className="catalog-main__icon-scroll-left"
        onClick={() => {
          refEl.current.scrollTo({ left: 0, behavior: "smooth" });
        }}
      />
      <RightCircleOutlined
        className="catalog-main__icon-scroll-right"
        onClick={() => {
          refEl.current.scrollTo({ left: 1000, behavior: "smooth" });
        }}
      />
    </div>
  );
}
