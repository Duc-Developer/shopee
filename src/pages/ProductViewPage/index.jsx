import {
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../fakeData.json";
import HeaderComponent from "../../features/HeaderComponent";

function formatMoney(number) {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export default function ProductViewPage() {
  const { id } = useParams();
  const productMatch = data.products.find((item) => item.id === id);
  const [value, setValue] = useState(1);

  function amoutDecrease() {
    value > 1 ? setValue(value - 1) : setValue(1);
  }

  function amoutIncrease() {
    value === productMatch.maxFlash
      ? setValue(productMatch.maxFlash)
      : setValue(value + 1);
  }

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  return (
    <div className="product-view-page">
      <HeaderComponent />
      <Row className="product-view-page__container">
        <Col className="product-view-page__image-box" span={12}>
          <img
            className="product-view-page__main-image"
            src={productMatch.src}
            alt={productMatch.src}
          />
        </Col>
        <Col className="product-view-page__description" span={12}>
          <div className="product-view-page__description-title">
            <b>{productMatch.name}</b>
          </div>
          <div className="product-view-page__description-about">
            <span>{`5 ***** | ${productMatch.maxFlash} tồn kho | ${productMatch.sold} đã bán`}</span>
          </div>
          <div className="product-view-page__description-price">
            <span>{formatMoney(productMatch.price)}</span>
          </div>
          <div className="product-view-page__add-to-cart">
            <div className="product-view-page__add-to-cart-amount">
              <Input
                type="number"
                name="amount"
                value={value}
                onChange={(e) => {
                  let inputValue = JSON.parse(e.target.value);
                  inputValue < 1 ? setValue(1) : setValue(inputValue);
                  inputValue > productMatch.maxFlash ? setValue(productMatch.maxFlash) : setValue(inputValue);
                }}
                className="product-view-page__add-to-cart-amount-input"
                prefix={
                  <MinusOutlined
                    onClick={amoutDecrease}
                    className="product-view-page__add-to-cart-amount--minus"
                  />
                }
                suffix={
                  <PlusOutlined
                    onClick={amoutIncrease}
                    className="product-view-page__add-to-cart-amount--plus"
                  />
                }
              />
            </div>
            <Button
              className="product-view-page__add-to-cart-button"
              size="large"
              onClick={() => {console.log("we dispatch action here")}}
            >
              <ShoppingCartOutlined />
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
