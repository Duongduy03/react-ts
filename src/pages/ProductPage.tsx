// import React from "react";
import { useState, useEffect } from "react";
// import { deleteProduct } from "../api/product";
import { IProduct } from "../interface/Interface";
import { Link } from "react-router-dom";
interface IPropProduct {
  products: IProduct[];
}
const ProductPage = (props: IPropProduct) => {
  //   console.log(props.products);
  // console.log(props.onRemove);
  // return;
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  const getEightProduct = data.slice(0, 8);
  const getEightProduct1 = data.slice(8, 16);
  // console.log(getEightProduct);
  // console.log(getEightProduct1);

  return (
    <div>
      {/* {data.map((product) => {
        //   console.log(product.productName);
        return (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <h3>
              <button>Deltail</button>
            </h3>
            <button onClick={() => removeProduct(product._id)}>Remove </button>
          </div>
        );
      })} */}
      <section className="sales">
        <div className="container">
          <div className="sale">
            <div className="sale-left">
              <h1>Top Designer Pick</h1>
              <p>
                The pinnacle of versatility, our core collection is flattering
                on all body types, looks great layered or alone, and is designed
                to span the seasons 90’ s sustainable photo booth
              </p>
            </div>
            <h1 className="sale-off">50% OFF</h1>
          </div>
        </div>

        <img src="./src/images/17.jpeg" alt="" className="w100" />
      </section>
      <section className="shops">
        <div className="container">
          <div className="shop">
            <div className="shop-item">
              <div className="shop-title">
                <h1>Collection</h1>
                <img src="./src/images/line.svg" alt="" />
              </div>
              <div className="collection">
                <div className="collection-image">
                  <img
                    src="./src/images/50.svg"
                    alt=""
                    className="collection-img"
                  />
                  <img
                    src="./src/images/Women's.svg"
                    alt=""
                    className="collection-img"
                  />
                  <img
                    src="./src/images/Men's.svg"
                    alt=""
                    className="collection-img"
                  />
                </div>
              </div>
            </div>
            <div className="shop-item">
              <div className="shop-title">
                <h1>Top Sellers</h1>
                <img src="./src/images/line.svg" alt="" />
              </div>
              <div className="products">
                {getEightProduct.map((product) => {
                  return (
                    <div className="product-item" key={product._id}>
                      <Link to={`/products/${product._id}`}>
                        <img
                          src={product.image}
                          alt=""
                          className="product-img"
                        />
                      </Link>

                      <div className="product-top">
                        <h4>{product.name}</h4>
                        <img src="./src/images/star.svg" alt="" />
                      </div>
                      <h3>{product.name}</h3>
                      <div className="product-top">
                        <h3>$ {product.price}</h3>
                        <img src="./src/images/circle.svg" alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="shop-item">
              <div className="shop-title">
                <h1>New Arrivals</h1>
                <img src="./src/images/line.svg" alt="" />
              </div>
              <div className="products">
                {getEightProduct1.map((product) => {
                  return (
                    <div className="product-item" key={product._id}>
                      <Link to={`/products/${product._id}`}>
                        <img
                          src={product.image}
                          alt=""
                          className="product-img"
                        />
                      </Link>
                      <div className="product-top">
                        <h4>{product.name}</h4>
                        <img src="./src/images/star.svg" alt="" />
                      </div>
                      <h3>{product.name}</h3>
                      <div className="product-top">
                        <h3>$ {product.price}</h3>
                        <img src="./src/images/circle.svg" alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="magic">
        <div className="magic-img">
          <img src="./src/images/img27.png" alt="" />
        </div>
        <h1>MAGIC SUMMER SALE 2022</h1>
      </section>
      <section className="user">
        <div className="container">
          <div className="shops">
            <div className="shop">
              <div className="shop-item">
                <div className="shop-title">
                  <h1>Featured</h1>
                  <img src="./src/images/line.svg" alt="" />
                </div>
                <div className="featured-img">
                  <div>
                    <img src="./src/images/anh12.jpeg" alt="" />
                    <img src="./src/images/anh13.jpeg" alt="" />
                    <img src="./src/images/anh10.jpeg" alt="" />
                    <img src="./src/images/img7.svg" alt="" />
                  </div>
                  <img src="./src/images/21.jpeg" alt="" className="img-big" />
                </div>
              </div>
            </div>
          </div>
          <div className="user-talk">
            <img src="./src/images/star.svg" alt="" className="user-icon" />
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              ex, provident dolorum repudiandae eum ducimus, iure eaque
              architecto corporis suscipit enim, commodi magni ut atque iste
              quis natus illo sit. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Laboriosam esse, ullam non reiciendis voluptatem
              alias, enim facilis amet atque placeat similique necessitatibus"
            </p>
            <div className="user-author">
              <img src="./src/images/Toi.jpg" alt="" />
              <div className="user-name">Dương Văn Duy</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
