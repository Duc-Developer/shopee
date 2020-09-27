import {
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
  RollbackOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import { Carousel, Col, Row } from "antd";
import React, { useRef } from "react";
import bannerLeft01 from "../../assist/images/shopee-mall-images/19-09-banner-shopee-mall.jpeg";
import bannerLeft02 from "../../assist/images/shopee-mall-images/marvel-shopee-mall-banner.jpeg";
import bannerLeft03 from "../../assist/images/shopee-mall-images/dove-shopee-mall-banner.png";

function importAll(r) {
  return r.keys().map(r);
}

const deals = importAll(
  require.context(
    "../../assist/images/shopee-mall-images/deal",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default function ShopeeMallDeal() {
  const innerRef = useRef(null);
  return (
    <div className="shopee-mall-deal">
      <div className="shopee-mall-deal__header">
        <div className="shopee-mall-deal__header-title">
          <span>SHOPEE MALL</span>
        </div>
        <div className="shopee-mall-deal__header-slogan">
          <RollbackOutlined className="shopee-mall-deal__header-icon" />
          <span> 7 Ngày miễn phí trả hàng</span>
        </div>
        <div className="shopee-mall-deal__header-slogan">
          <SecurityScanOutlined className="shopee-mall-deal__header-icon" />
          <span> Hàng chính hãng 100%</span>
        </div>
        <div className="shopee-mall-deal__header-slogan">
          <DoubleRightOutlined className="shopee-mall-deal__header-icon" />
          <span> Miễn phí vận chuyển</span>
        </div>
      </div>
      <div className="shopee-mall-deal__content">
        <Row>
          <Col className="shopee-mall-deal__content--left" span={8}>
            <Carousel autoplay dots={false}>
              <img src={bannerLeft01} alt="banner-19-9-shopee-mall" />
              <img src={bannerLeft02} alt="banner-marvel-shopee-mall" />
              <img src={bannerLeft03} alt="banner-dove-shopee-mall" />
            </Carousel>
          </Col>
          <Col className="shopee-mall-deal__content--right" span={16}>
            <Carousel ref={innerRef} autoplay={false} dots={false}>
              {[0, 7].map((num) => {
                return (
                  <div key={num}>
                    {deals.slice(num, num + 8).map((item, index) => {
                      return (
                        <div
                          className="shopee-mall-deal__deal-item"
                          key={index}
                        >
                          <img src={item} alt={item} />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Carousel>
            <LeftOutlined
              onClick={() => {
                innerRef.current.prev();
              }}
              className="shopee-mall-deal__content-prev-icon"
            />
            <RightOutlined
              onClick={() => {
                innerRef.current.next();
              }}
              className="shopee-mall-deal__content-next-icon"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
