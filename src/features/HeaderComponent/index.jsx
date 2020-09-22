import React, { useState } from "react";
import { Col, Row } from "antd";
import logo from "../../assist/images/shopee_logo.png";
import {
  BellOutlined,
  FacebookOutlined,
  InstagramOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useForm } from "react-hook-form";
import SearchBar from "../../components/SearchBar";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

const defaultValues = {
  search: "asfds",
};

const fakeKeywords = [
  "dép nữ",
  "áo thun",
  "áo lót bầu",
  "xà đơn treo tường",
  "sandal nữ",
  "vòng lắp eo",
  "cặp đen đi học",
  "balo chat",
  "áo ngực SU ĐÚC",
  "set son merzy",
  "Dép bông",
  "Dép",
  "iphone 12",
  "ipod air 2",
  "makbook air",
  "makbook pro",
];
let fakeStart = Math.floor(Math.random() * fakeKeywords.length);

export default function HeaderComponent() {
  const { register, control, handleSubmit } = useForm({ defaultValues });
  const [isActive, setActive] = useState(false);
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="header-component">
      <div className="header-component__top">
        <div className="header-component__nav-top-left">
          <div>
            <span>Kênh Người Bán</span>
          </div>
          <div>
            <span>Tải ứng dụng</span>
          </div>
          <div>
            <span>Kết nối </span>
            <FacebookOutlined />
            <InstagramOutlined />
          </div>
        </div>
        <div className="header-component__nav-top-center"></div>
        <div className="header-component__nav-top-right">
          <div>
            <BellOutlined />
            <span>Thông Báo</span>
          </div>
          <div>
            <QuestionCircleOutlined />
            <span>Trợ Giúp</span>
          </div>
          <div>
            <span>Đăng Ký</span>
          </div>
          <div>
            <span
              onClick={() => {
                history.push("/login");
              }}
            >
              Đăng Nhập
            </span>
          </div>
        </div>
      </div>
      <div className="header-component__bottom">
        <div className="header-component__logo-main">
          <a href="/">
            <img src={logo} alt="logo-shopee-main" />
          </a>
        </div>
        <div className="header-component__nav-bar-main">
          <form onSubmit={handleSubmit(onSubmit)}>
            <SearchBar
              listKeywords={fakeKeywords.slice(fakeStart, fakeStart + 5)}
              control={control}
            />
          </form>
        </div>
        <div className="header-component__cart">
          <ShoppingCartOutlined
            onMouseMove={() => {
              setActive(true);
            }}
            onMouseLeave={() => {
              setActive(false);
            }}
            className="header-component__shopping-cart-icon"
          />
          <div
            onMouseMove={() => {
              setActive(true);
            }}
            onMouseLeave={() => {
              setActive(false);
            }}
            className={classNames("header-component__products-cart", {
              "header-component__products-cart--is-active": isActive,
            })}
          >
            cart product here
          </div>
        </div>
      </div>
    </div>
  );
}
