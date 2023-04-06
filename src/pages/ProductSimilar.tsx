import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IProduct } from "../interface/Interface";
import { getAllProduct, getProductId } from "../api/product";
const ProductSimilar = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [products, setProducts] = useState<IProduct[]>([]);
  //   console.log(product);

  useEffect(() => {
    getProductId(id).then(({ data }) => {
      setProduct(data);
    });
    getAllProduct().then(({ data }) => {
      setProducts(data);
    });
  }, []);
  const newProduct = products.filter((pro) => pro._id != product?._id);
  //   console.log(newProduct);
  const getPro = newProduct.filter(
    (pro) => pro.categoryId == product?.categoryId._id
  );
  const get8Product = newProduct.slice(16, 24);
  console.log(get8Product);
  const click = () => {
    location.reload();
  };
  document.getElementById("img")?.addEventListener("click", click());
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
                <Link to={`/products/${product._id}`}>
                  <img
                    src={product.image}
                    alt=""
                    className="product-img"
                    id="img"
                  />
                </Link>
                <div className="product-top">
                  <h4>{product.name}</h4>
                  <img src="../src/images/star.svg" alt="" />
                </div>

                <div className="product-top">
                  <h3>$ {product.price}</h3>
                  <img src="../src/images/circle.svg" alt="" />
                </div>
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
          {get8Product.map((product) => {
            return (
              <div className="product-item" key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <img
                    src={product.image}
                    alt=""
                    className="product-img"
                    id="img"
                  />
                </Link>
                <div className="product-top">
                  <h4>{product.name}</h4>
                  <img src="../src/images/star.svg" alt="" />
                </div>

                <div className="product-top">
                  <h3>$ {product.price}</h3>
                  <img src="../src/images/circle.svg" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSimilar;
