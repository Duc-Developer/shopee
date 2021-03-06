import React from "react";
import data from "../../fakeData.json";
import ProductCard from "../../components/ProductCard";
import { Col, Row } from "antd";

export default function SuggestProducts() {
  return (
    <div className="suggest-products">
      <div className="suggest-products__title">
        <span>GỢI Ý HÔM NAY</span>
      </div>
      <div>
        <Row className="suggest-products__content">
          {data.products.slice(0, 24).map((item) => {
            return (
              <Col
                span={4}
                className="suggest-products__product-item"
                key={item.id}
              >
                <div>
                  <ProductCard
                    id={item.id}
                    src={item.src}
                    name={item.name}
                    price={item.price}
                    sold={item.sold}
                    salePercent={item.sale}
                    width="100%"
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
