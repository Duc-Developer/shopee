import React from "react";
import { Col, Row } from "antd";
import {
  BellOutlined,
  FacebookOutlined,
  InstagramOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

export default function HeaderComponent() {
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
            <span>Đăng Nhập</span>
          </div>
        </div>
      </div>
      <div className="header-component__bottom">header bottom here</div>
    </div>
  );
}
