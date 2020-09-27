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
import { useSelector } from "react-redux";

export default function HeaderComponent() {
  const [isActive, setActive] = useState(false);
  const history = useHistory();
  const fakeKeywords = data.key;
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart);

  const handleSearch = (value) => {
    history.push({
      pathname: "/products",
      search: `?key=${value}`,
    });
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
          {!user ? (
            <>
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
            </>
          ) : (
            <div>
              <b>{user.username}</b>
            </div>
          )}
        </div>
      </div>
      <div className="header-component__bottom">
        <div className="header-component__logo-main">
          <a href="/">
            <img src={logo} alt="logo-shopee-main" />
          </a>
        </div>
        <div className="header-component__nav-bar-main">
          <SearchBar handleSearch={handleSearch} listKeywords={fakeKeywords} />
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
          <div className="header-component__shopping-cart-totals">
            <span>{cart.totals}</span>
          </div>
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
            {!cart.products.length ? (
              <div>
                <h1>Cart is empty</h1>
              </div>
            ) : (
              cart.products.map((product) => {
                return (
                  <div
                    className="header-component__products-cart-item"
                    key={product.id}
                  >
                    <div className="header-component__products-cart-item-image">
                      <img src={product.src} alt="cart-product-image" />
                    </div>

                    <div className="header-component__products-cart-item-name">
                      <span>{product.name}</span>
                    </div>
                    <div className="header-component__products-cart-item-amount">
                      <span>{product.amount}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
