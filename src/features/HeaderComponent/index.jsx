import React, { useState } from "react";
import logo from "../../assist/images/shopee_logo.png";
import {
  BellOutlined,
  FacebookOutlined,
  InstagramOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import SearchBar from "../../components/SearchBar";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import data from "../../fakeData.json";


export default function HeaderComponent() {
  const [isActive, setActive] = useState(false);
  const history = useHistory();
  const fakeKeywords = data.key;

  const handleSearch = (value) => {
    history.push({
      pathname: "/products",
      search: `?key=${value}`
    })
  }

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
          <SearchBar 
          handleSearch={handleSearch}
          listKeywords={fakeKeywords} 
          />
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
