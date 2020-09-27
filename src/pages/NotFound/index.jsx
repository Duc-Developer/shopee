import { Alert } from "antd";
import React from "react";
import HeaderComponent from "../../features/HeaderComponent";
import logo from "../../assist/images/shopee_logo.png";

export default function NotFoundPage() {

  return (
    <div className="not-found-page">
      <HeaderComponent />
      <Alert
        message={
          <div className="not-found-page__title">
            <h1>404 Not Found</h1>
          </div>
        }
        className="not-found-page__alert-box"
        description={
          <div className="not-found-page__content">
            <span>Sorry, This page is not exist!</span>
            <img src={logo} alt="logo-on-not-found-page" />
          </div>
        }
        type="warning"
        showIcon
        banner
      />
    </div>
  );
}
