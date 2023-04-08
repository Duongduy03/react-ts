import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi, trang này không tồn tại."
      extra={
        <Link
          to={"/"}
          type="primary"
          className="btn"
          style={{ background: "#fa8c16", color: "#ffff" }}
        >
          Trang chủ
        </Link>
      }
    />
  );
};

export default PageNotFound;
