import React from "react";
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

const defaultValues = {
    search: "asfds"
}

export default function HeaderComponent() {
  const { register, control, handleSubmit } = useForm({defaultValues});

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
            <span>Đăng Nhập</span>
          </div>
        </div>
      </div>
      <div className="header-component__bottom">
        <div className="header-component__logo-main">
          <img src={logo} alt="logo-shopee-main" />
        </div>
        <div className="header-component__nav-bar-main">
            <form onSubmit={handleSubmit(onSubmit)}>
                <SearchBar control={control} />
            </form>
        </div>
        <div className="header-component__cart-icon">
          <ShoppingCartOutlined style={{
              color: "white",
              cursor: "pointer",
              fontSize: "2em",
              padding: "0 2em 0 2em"
          }} />
        </div>
      </div>
    </div>
  );
}
