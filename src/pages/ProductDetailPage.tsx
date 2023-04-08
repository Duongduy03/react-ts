import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../interface/Interface";
import { getProductId } from "../api/product";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductSimilar from "./ProductSimilar";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    getProductId(String(id)).then(({ data }) => {
      setProduct(data);
    });
  }, []);

  console.log(product);

  return (
    <div>
      <section className="lastest">
        <div className="container">
          <h1 className="big-title">Product Detail Page</h1>
          <div className="about-icons">
            <a href="/">
              <FontAwesomeIcon icon={faHouse} />
            </a>
            <span> / Detail Page</span>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="container">
          <div className="blogs-lastest">
            <div className="blog">
              <div className="blog-item">
                <div className="img">
                  <img src={product?.image} alt="" className="blog-img" />
                </div>
                <div className="inf">
                  <h2 className="blog-title">{product?.name}</h2>
                  <span className="blog-time">April 01 , 2023</span>
                  <h3>$ {product?.price}</h3>
                  <h3>Thông tin </h3>
                  <p className="blog-desc">{product?.description}</p>
                  <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                </div>
              </div>
            </div>
            <hr />
            {<ProductSimilar />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
