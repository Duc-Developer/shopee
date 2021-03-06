import { Button, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import logo from "../../assist/images/shopee_logo.png";
import { UserOutlined, ToolOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { authConstants as type } from "../../constants";
import { useHistory } from "react-router-dom";

export default function LoginPage(props) {
  const [values, setValues] = useState({ username: null, password: null });
  const dispatch = useDispatch();
  const history = useHistory();
  const message = useSelector((state) => state.auth.message);
  const userCurrent = useSelector((state) => state.auth.user);

  useEffect(() => {
    function redirect() {
      if (userCurrent) {
        history.push("/home");
      }
    }
    let timer = setTimeout(redirect, 2000);
  }, [userCurrent]);

  const onFinish = (values) => {
    dispatch({
      type: type.LOGIN_REQUEST,
      payload: values,
    });
  };

  const onValuesChange = (input) => {
    setValues({
      ...values,
      ...input,
    });
  };

  return (
    <div className="login-page">
      <div className="login-page__header">
        <a href="/">
          <img src={logo} alt="logo-header-login-page" />
        </a>
      </div>
      <div className="login-page__content">
        <Row>
          <Col span={12}>
            <div className="login-page__content-left">
              <img src={logo} alt="logo-content-login-page" />
              <span>Nền tảng thương mại điện tử</span>
              <br />
              <span>Hàng đầu Đông Nam Á và Đài Loan</span>
            </div>
          </Col>
          <Col span={12}>
            <Form
              onFinish={onFinish}
              onValuesChange={onValuesChange}
              className="login-page__form"
            >
              <h2>
                <b>Đăng Nhập</b>
              </h2>
              <Form.Item
                name="username"
                rules={[{ required: true, message: "User là cần thiết!" }]}
                className="login-page__input"
              >
                <Input
                  placeholder="user name"
                  size="large"
                  prefix={<UserOutlined style={{ color: "#aaaaaa" }} />}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Pasword là bắt buộc!" },
                  { min: 8, message: "Mật Khẩu chứa tối thiểu 8 ký tự!" },
                ]}
                className="login-page__input"
              >
                <Input.Password
                  placeholder="password"
                  size="large"
                  prefix={<ToolOutlined style={{ color: "#aaaaaa" }} />}
                />
              </Form.Item>
              <Button
                className="login-page__button"
                htmlType="submit"
                size="large"
                type="primary"
                disabled={!values.username || !values.password ? true : false}
              >
                Đăng Nhập
              </Button>
              <div>
                {message && (
                  <span>
                    <i>{message}</i>
                  </span>
                )}
              </div>
              <div className="login-page__form--line-space">
                <span>Hoặc</span>
              </div>
              <div>
                <span>
                  Bạn mới biết đến Shopee
                  <a href="#"> Đăng Ký</a>
                </span>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
