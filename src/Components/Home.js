import React from "react";
import "../styles/Home.css";
import Model from "../assets/favpng_fashion-model-african-american-fashion-design.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import F1 from "../Product img/f1.jpg";
import F2 from "../Product img/f2.jpg";
import F3 from "../Product img/f3.jpg";
import F4 from "../Product img/f4.jpg";
import F5 from "../Product img/f5.jpg";
import F6 from "../Product img/f6.jpg";
import F7 from "../Product img/f7.jpg";
import F8 from "../Product img/f8.jpg";
import n1 from "../Product img/n1.jpg";
import n2 from "../Product img/n2.jpg";
import n3 from "../Product img/n3.jpg";
import n4 from "../Product img/n4.jpg";
import n5 from "../Product img/n5.jpg";
import n6 from "../Product img/n6.jpg";
import n7 from "../Product img/n7.jpg";
import n8 from "../Product img/n8.jpg";
import { Link } from "react-router-dom";
import { SlBag } from "react-icons/sl";
import { SlStar } from "react-icons/sl";
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";

function Home() {
  return (
    <div className="container">
      <section className="first">
        <div className="offer">
          <h1>Welcome to our store!</h1>
          <h2>Super Offer</h2>
          <p>Get 20% off your first purchase with code OFFER20</p>
          <div className="wrapper">
            <button>Shop Now</button>
          </div>
        </div>

        <div className="pic">
          <img src={Model} alt="model" />
        </div>
      </section>

      <section className="Feature">
        <div>
          <img src={f1} alt="f1" />
          <h3 className="a"> Free Shipping</h3>
        </div>
        <div>
          <img src={f2} alt="f2" />
          <h3 className="b"> Online Order</h3>
        </div>
        <div>
          <img src={f3} alt="f3" />
          <h3 className="c"> Save Money</h3>
        </div>
        <div>
          <img src={f4} alt="f4" />
          <h3 className="d"> Promotions</h3>
        </div>
        <div>
          <img src={f5} alt="f5" />
          <h3 className="e"> Happy Sale</h3>
        </div>
        <div>
          <img src={f6} alt="f6" />
          <h3 className="f"> 24/7 Support </h3>
        </div>
      </section>
      <section className="product_1">
        <h2> Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="product_container">
          <div className="product">
            <img src={F1} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Aloha Shirt</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={F2} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Summer Solstice Shirt</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={F3} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Sandy Shores Tee</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={F4} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Palms and Pineapples Tee</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={F5} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Sunset Serenade Tee</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={F6} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Ocean Breeze Top</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={F7} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Breezy Palazzo Pants</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={F8} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Sunkissed Sundress</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
        </div>
      </section>
      <section className="product_1">
        <h2> New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="product_container">
          <div className="product">
            <img src={n1} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Aloha Shirt</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={n2} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Summer Solstice Shirt</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={n3} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Sandy Shores Tee</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={n4} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Palms and Pineapples Tee</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={n5} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Sunset Serenade Tee</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={n6} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Ocean Breeze Top</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={n7} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Breezy Palazzo Pants</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
          <div className="product">
            <img src={n8} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Sunkissed Sundress</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
