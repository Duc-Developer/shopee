import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../components/ProductCard";
import TimeCountDown from "../../components/TimeCountDown";
import data from "../../fakeData.json";
import { Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function FlashSaleContainer(props) {
  const start = Math.floor(Math.random() * (data.products.length - 16));
  const productSlices = data.products.slice(start, start + 15);
  const history =useHistory();
  const innerRef = useRef(null);
console.log(history)
  return (
    <div className="flash-sale-container">
      <div className="flash-sale-container__header">
        <div className="flash-sale-container__title">
          <span>FLASH SALE</span>
        </div>
        <TimeCountDown width="8em" hours={2} minutes={0} seconds={20} />
      </div>
      <div>
        <Carousel ref={innerRef} autoplay={false} dots={false}>
          {[0, 4, 9].map((num, index) => {
            return (
              <div key={index}>
                {productSlices.slice(num, num + 5).map((item) => {
                  const { src, name, price, sold, sale, maxFlash, id } = item;
                  return (
                    <div
                      key={id}
                      className="flash-sale-container__product"

                      onClick={() => {history.push(`/products/${id}`)}}
                    >
                      <ProductCard
                        src={src}
                        name={name}
                        price={price}
                        sold={sold}
                        sale={sale}
                        maxFlash={maxFlash}
                        width="16.3em"
                        flashSale={true}
                        id={id}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="flash-sale-container__button-group">
        <LeftCircleOutlined
          onClick={() => {
            innerRef.current.prev();
          }}
          className="flash-sale-container__button-back-icon"
        />
        <RightCircleOutlined
          onClick={() => {
            innerRef.current.next();
          }}
          className="flash-sale-container__button-next-icon"
        />
      </div>
    </div>
  );
}
