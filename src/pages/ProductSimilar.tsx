import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IProduct } from "../interface/Interface";
import { getAllProduct, getProductId } from "../api/product";
const ProductSimilar = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product1, setProduct1] = useState<IProduct[]>([]);
  //   console.log(product);

  useEffect(() => {
    getProductId(String(id)).then(({ data }) => {
      setProduct(data);
    });
    getAllProduct().then(({ data }) => {
      setProducts(data);
    });
  }, []);
  const newProduct: IProduct[] = products.filter(
    (pro) => pro._id != product?._id
  );
  // console.log(product);
  const getPro = newProduct.filter(
    (pro) => pro.categoryId == product?.categoryId._id
  );
  // console.log(newProduct);

  const getProduct = newProduct.filter(
    (pro) => pro.categoryId !== product?.categoryId._id
  );
  // console.log(getProduct);
  const click = () => {
    // e.preventDefault();
    location.reload();
  };

  return (
    <div>
      {/* <h1>Các sản phẩm tương tự</h1> */}
      <div className="shop-item">
        <div className="shop-title">
          <h1>Sản phẩm tương tự</h1>
          <img src="./src/images/line.svg" alt="" />
        </div>
        <div className="products">
          {getPro.map((product) => {
            return (
              <div className="product-item" key={product._id}>
                <img
                  src={product.image}
                  alt=""
                  className="product-img"
                  id="img"
                />

                <div className="product-top">
                  <h4>{product.name}</h4>
                  <img src="../src/images/star.svg" alt="" />
                </div>
                <div className="product-top">
                  <h3>$ {product.price}</h3>
                  <img src="../src/images/circle.svg" alt="" />
                </div>
                <Link to={`/products/${product._id}`} onClick={() => click()}>
                  <button className="btn btn-primary" id="btn-reload">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <hr />

      <div className="shop-item">
        <div className="shop-title">
          <h1>Sản phẩm khác</h1>
          <img src="./src/images/line.svg" alt="" />
        </div>
        <div className="products">
          {getProduct.map((product) => {
            return (
              <div className="product-item" key={product._id}>
                <img
                  src={product.image}
                  alt=""
                  className="product-img"
                  id="img"
                />

                <div className="product-top">
                  <h4>{product.name}</h4>
                  <img src="../src/images/star.svg" alt="" />
                </div>

                <div className="product-top">
                  <h3>$ {product.price}</h3>
                  <img src="../src/images/circle.svg" alt="" />
                </div>
                <Link to={`/products/${product._id}`} onClick={() => click()}>
                  <button className="btn btn-primary" id="btn-reload">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSimilar;
