import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interface/Interface";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
interface IPropUser {
  onAddUser: (inputValue: IUser) => void;
}
const SignUpPage = (props: IPropUser) => {
  const navigate = useNavigate();
  // console.log(props);

  const onFinish = (values: any) => {
    props.onAddUser(values);
    // navigate("/signin");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
          <h1>Form Sign Up</h1>

          <hr />
          <br />
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Bạn chưa nhập họ và tên!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            name="image"
            rules={[{ required: true, message: "Bạn chưa nhập họ và tên!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Image"
            />
          </Form.Item>
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
          <Form.Item
            name="confirmPass"
            rules={[
              { required: true, message: "Bạn chưa nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu phải nhiều hơn 6 kí tự" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu của bạn hiện tại không khớp!")
                  );
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
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
              Sign up
            </Button>
            <Button
              type="default"
              htmlType="reset"
              className="login-form-button"
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
