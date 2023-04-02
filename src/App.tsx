import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductId,
  updateProduct,
} from "./api/product";
import Dashboard from "./admin/Dashboard";
import ProductManagement from "./admin/roductManagement";
import AddProduct from "./admin/AddProduct";
import UpdateProduct from "./admin/UpdateProduct";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

import ClientLayout from "./layout/ClientLayout";
import AdminLayout from "./layout/AdminLayout";
import { IProduct, IPropProduct, IUser } from "./interface/Interface";
import { addUser, signin } from "./api/user";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";/
function App() {
  const navigate = useNavigate();
  const [products, setProduct] = useState<IProduct[]>([]);
  // const [product, setProducts] = useState({});

  // console.log(id);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data));
  }, []);

  // console.log(products);
  const onHandleRemove = (id: number | string) => {
    deleteProduct(id)
      .then(() => {
        setProduct(products.filter((product) => product._id !== id));
      })
      .then(() => alert("Xoa thanh cong"));
  };
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => setProduct([...products, product]));
  };
  const onHandleUpdate = (product: IProduct) => {
    // console.log(product);
    const newData = products.filter((pro) => pro._id != product._id);
    // console.log(newData);
    updateProduct(product).then(() => setProduct([...newData, product]));
  };
  const onHandleAddUser = (user: IUser) => {
    addUser(user)
      .then(() => alert("Đăng ký thành công"))
      .then(() => navigate("/signin"));
  };
  const onHandleSignin = (user: IUser) => {
    signin(user)
      .then(({ data }) => {
        localStorage.setItem("accessToken", data.accessToken);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  const onHandleLogOut = () => {
    localStorage.removeItem("accessToken");
    location.reload();
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/products"
            element={
              <ProductPage products={products} onRemove={onHandleRemove} />
            }
          >
            <Route path="/products/:id" element={<ProductDetailPage />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route
              index
              element={
                <ProductManagement
                  products={products}
                  onRemove={onHandleRemove}
                />
              }
            />
            <Route path="add" element={<AddProduct onAdd={onHandleAdd} />} />
            <Route
              path="update/:id"
              element={
                <UpdateProduct products={products} onUpdate={onHandleUpdate} />
              }
            />
          </Route>
        </Route>
        <Route
          path="/signup"
          element={<SignUpPage onAddUser={onHandleAddUser} />}
        />
        <Route
          path="/signin"
          element={
            <SignInPage onSignIn={onHandleSignin} onLogOut={onHandleLogOut} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
