import React, { useState } from "react";
import { IUser } from "../interface/Interface";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
interface IPropUser {
  onSignIn: (inputValue: IUser) => void;
  // onLogOut: () => void;
}
const SignInPage = (props: IPropUser) => {
  // console.log(props);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    props.onSignIn(values);
    // navigate("/signin");
  };

  // const onHandleLogOut = (e: any) => {
  //   e.preventDefault();
  //   props.onLogOut();
  // };

  return (
    <div className="duy">
      <div className="form-signin-signup">
        <Form
          name="normal_login"
          className="login-form"
          style={{ maxWidth: 400 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <h1>Form Login</h1>

          <hr />
          <br />
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Bạn chưa nhập email!" },
              { type: "email", message: "Email phải đúng định dạng" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Bạn chưa nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu phải nhiều hơn 6 kí tự" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginRight: 2 }}
            >
              Log in
            </Button>
            Or <a href="/signup">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
