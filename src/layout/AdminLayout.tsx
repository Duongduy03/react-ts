import React from "react";
import {
  SkinOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    { key: "1", label: "Products", url: "/admin/products" },
    { key: "2", label: "Categories", url: "/admin/categories" },
    // { key: "3", label: "Menu 3" },
  ];
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["3"]}
          // items={items}
        >
          {items.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link to={item.url} />

                {item.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
