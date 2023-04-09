import { Link } from "react-router-dom";
import { IProduct } from "../interface/Interface";
import { useEffect, useState } from "react";
import Slider from "./slider/Slider";

interface IProps {
  products: IProduct[];
}
const HomePage = (props: IProps) => {
  // console.log(props);
  const [products, setProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    setProduct(props.products);
  }, [props]);
  // console.log(products);
  const getMinProduct = products.slice(10, 18);
  // console.log(getMinProduct);

  return (
    <div>
      <article>
        <Slider />
      </article>
      <section className="designers">
        <div className="container">
          <div className="designer">
            <div className="designer-content">
              <h1 className="designer-title">Top Designer Pick</h1>
              <p className="designer-desc">
                The pinnacle of versatility, our core the collection is
                flattering on all body types, looks great layered or alone, and
                is designed to span the seasons.
              </p>
              <a href="shop.html" className="designer-button">
                Shop now
              </a>
              <div className="designer-price">
                <h1>50% Discount Till</h1>
              </div>
            </div>
            <div className="designer-image">
              <img
                src="src/images/anh1.jpeg"
                alt=""
                className="designer-img1"
              />
              <img
                src="src/images/anh2.jpeg"
                alt=""
                className="designer-img2"
              />
            </div>
          </div>
          <div className="designer-strength">
            <div className="strength">
              <img src="./src/images/ship.svg" alt="" />
              <div className="strength-content">
                <h3 className="strength-title">FAST DELIVERY</h3>
                <p className="strength-desc">
                  Delivery Within 24 hours In Any Place
                </p>
              </div>
            </div>
            <div className="strength">
              <img src="./src/images/bud.svg" alt="" />
              <div className="strength-content">
                <h3 className="strength-title">24/7 SUPPORT</h3>
                <p className="strength-desc">
                  Get Our Support Any Time At Any Hour
                </p>
              </div>
            </div>
            <div className="strength">
              <img src="./src/images/wall.svg" alt="" />
              <div className="strength-content">
                <h3 className="strength-title">SECURE SHOPPING</h3>
                <p className="strength-desc">
                  Highly Secured Online Payment Method
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collection">
        <div className="container">
          <div className="collection-image">
            <img src="./src/images/50.svg" alt="" className="collection-img" />
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
      </section>
      <section className="popular">
        <div className="container">
          <h1 className="heading">Popular Products</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ultrices
          </p>
          <div className="products">
            {getMinProduct.map((product) => {
              return (
                <div className="product-item" key={product._id}>
                  <a href={`/products/${product._id}`}>
                    <img src={product.image} alt="" className="product-img" />
                  </a>

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
      </section>
      <section className="featured">
        <div className="container">
          <h1 className="heading">Featured Products</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ultrices
          </p>
          <div className="featured-img">
            <div>
              <img src="src/images/anh14.jpeg" alt="" />
              <img src="src/images/anh15.webp" alt="" />
              <img src="src/images/anh8.jpeg" alt="" />
              <img src="./src/images/img7.svg" alt="" />
            </div>
            <img src="src/images/anh5.jpeg" alt="" className="img-big" />
          </div>
        </div>
      </section>
      <section className="signup">
        <div className="signup-content">
          <div className="container">
            <h1 className="signup-title">SIGN UP FOR NEWS & GET 20% OFF</h1>
            <div className="signup-email">
              <input
                type="text"
                className="signup-input"
                placeholder="Your email address"
              />
              <a href="#" className="signup-btn">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <img src="src/images/15.jpeg" alt="" />
      </section>
      <section className="lastests">
        <div className="container">
          <h1 className="heading">Lastest & Greatest</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ultrices
          </p>
          <div className="lastest">
            <div className="lastest-item">
              <div className="lastest-content">
                <h2>The best summer fashion</h2>
                <h4>April 01 , 2022</h4>
                <p>
                  One may not need charts and graphs at this point to know that,
                  in the past couple of years especially, the buying and selling
                  o...
                </p>
                <a href="blogs.html">Read more</a>
              </div>
              <img src="src/images/17.jpeg" alt="" />
            </div>
            <div className="lastest-item">
              <img src="src/images/anh18.webp" alt="" />
              <div className="lastest-content">
                <h2>Sneaker for winter</h2>
                <h4>April 01 , 2022</h4>
                <p>
                  The denim resurgence is the result of the long, secretive days
                  that people have to stay indoors. The ear of sportswear
                  emerged a...
                </p>
                <a href="blogs.html">Read more</a>
              </div>
            </div>
            <div className="react">
              <img src="./src/images/react.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
