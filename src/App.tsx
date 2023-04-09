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
import PageNotFound from "./pages/PageNotFound";
import ClientLayout from "./layout/ClientLayout";
import AdminLayout from "./layout/AdminLayout";
import { ICategory, IProduct, IUser } from "./interface/Interface";
import { addUser, getAllUser, signin } from "./api/user";
import { useNavigate } from "react-router-dom";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./api/category";
import CategoryManagement from "./admin/category/CategoryManagement";
import AddCategory from "./admin/category/AddCategory";
import UpdateCategory from "./admin/category/UpdateCategory";
import { authenticate } from "./utils/localStorage";
// import { useParams } from "react-router-dom";/
function App() {
  const navigate = useNavigate();
  const [products, setProduct] = useState<IProduct[]>([]);
  const [categories, setCategory] = useState<ICategory[]>([]);
  const [user, setUser] = useState<IUser[]>([]);
  const [keyword, setKeyword] = useState("");
  // const [product, setProducts] = useState({});
  // console.log(categories);

  // console.log(user);
  useEffect(() => {
    getAllProduct(keyword).then(({ data }) => setProduct(data.docs));
    getAllCategory().then(({ data }) => setCategory(data));
    getAllUser().then(({ data }) => setUser(data));
  }, [keyword]);

  // console.log(categories);

  // console.log(products);

  // Remove product
  const onHandleRemove = (id: number | string) => {
    deleteProduct(id)
      .then(() => {
        setProduct(products.filter((product) => product._id !== id));
      })
      .then(() => alert("Xoa thanh cong"));
  };

  // Remove category
  const onHandleRemoveCate = (id: number | string) => {
    deleteCategory(id)
      .then(() => {
        setCategory(categories.filter((category) => category._id !== id));
      })
      .then(() => alert("Xoa thanh cong"));
  };

  // add product
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => setProduct([...products, product]));
    navigate("/admin/products");
    location.reload();
  };

  // add category
  const onHandleAddCate = (category: ICategory) => {
    addCategory(category).then(() => setCategory([...categories, category]));
    navigate("/admin/categories");
    location.reload();
  };

  // update product
  const onHandleUpdate = (product: IProduct) => {
    // console.log(product);
    const newData = products.filter((pro) => pro._id != product._id);
    // console.log(newData);
    updateProduct(product).then(() => setProduct([...newData, product]));
    navigate("/admin/products");
  };
  // update category
  const onHandleUpdateCate = (category: ICategory) => {
    // console.log(category._id);
    const newData = categories.map((item) =>
      item._id === category._id ? category : item
    );
    console.log(newData);
    updateCategory(category).then(() =>
      setCategory(
        categories.map((item) => (item._id === category._id ? category : item))
      )
    );
    navigate("/admin/categories");
    // location.reload();
  };
  // sign up
  const onHandleAddUser = (user: IUser) => {
    addUser(user)
      .then(() => alert("Đăng ký thành công"))
      .then(() => navigate("/signin"));
  };
  // sign in
  const onHandleSignin = (user: IUser) => {
    signin(user)
      .then(({ data }) => {
        // console.log(data.user);

        localStorage.setItem("accessToken", data.accessToken);
        authenticate(data.user, () => {
          data.user.role === "admin" ? navigate("/admin") : navigate("/");

          location.reload();
        });
        // localStorage.setItem("user", JSON.stringify(data.user));
      })

      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  const onHandleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
    // location.reload();
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage products={products} />} />
          <Route
            path="products"
            element={<ProductPage products={products} />}
          />
          <Route path="products/:id" element={<ProductDetailPage />} />
        </Route>

        <Route
          path="/admin"
          element={<AdminLayout onLogOut={onHandleLogOut} />}
        >
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route
              index
              element={
                <ProductManagement
                  products={products}
                  onKeyWord={setKeyword}
                  onRemove={onHandleRemove}
                />
              }
            />
            <Route
              path="add"
              element={
                <AddProduct onAdd={onHandleAdd} categories={categories} />
              }
            />
            <Route
              path="update/:id"
              element={
                <UpdateProduct
                  categories={categories}
                  products={products}
                  onUpdate={onHandleUpdate}
                />
              }
            />
          </Route>
          <Route path="categories">
            <Route
              index
              element={
                <CategoryManagement
                  categories={categories}
                  onRemove={onHandleRemoveCate}
                />
              }
            />
            <Route
              path="add"
              element={<AddCategory onAdd={onHandleAddCate} />}
            />
            <Route
              path="update/:id"
              element={
                <UpdateCategory
                  categories={categories}
                  onUpdate={onHandleUpdateCate}
                />
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
          element={<SignInPage onSignIn={onHandleSignin} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
