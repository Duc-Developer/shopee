import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import classNames from "classnames";

BannerAutoSlide.propTypes = {
  listBanners: PropTypes.array,
};

export default function BannerAutoSlide(props) {
  const { listBanners } = props;
  const [onShow, setShow] = useState(false);
  const slider = useRef(null);
  return (
    <div
      className="banner-auto-slide"
      onMouseMove={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <Carousel ref={slider} autoplay>
        {listBanners &&
          listBanners.map((item, index) => {
            return (
              <div key={index}>
                <img
                  style={{ cursor: "pointer" }}
                  src={item}
                  alt="banner-slide"
                  width="100%"
                />
              </div>
            );
          })}
      </Carousel>
      <CaretLeftOutlined
        onClick={() => {
          slider.current.prev();
        }}
        className={classNames("banner-auto-slide__icon-previous", {
          "banner-auto-slide__icon-previous--on-show": onShow,
        })}
      />
      <CaretRightOutlined
        onClick={() => {
          slider.current.next();
        }}
        className={classNames("banner-auto-slide__icon-next", {
          "banner-auto-slide__icon-next--on-show": onShow,
        })}
      />
    </div>
  );
}
