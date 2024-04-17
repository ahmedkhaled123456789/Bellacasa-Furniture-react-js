import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import product from "../assets/data/products";
import counterimg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filterTrendingProducts = product.filter(
      (item) => item.category === "chair"
    );
    const filterBestSalesProducts = product.filter(
      (item) => item.category === "sofa"
    );
    const filterMobileProducts = product.filter(
      (item) => item.category === "mobile"
    );
    const filterWirelessProducts = product.filter(
      (item) => item.category === "wireless"
    );

    const filterPopularProducts = product.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filterTrendingProducts);
    setBestSalesProducts(filterBestSalesProducts);
    setMobileProducts(filterMobileProducts);
    setWirelessProducts(filterWirelessProducts);
    setPopularProducts(filterPopularProducts);

  }, []);

  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitl">trending product in {year}</p>
                <h2>make your interior more minimalistic & modern</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deleniti adipisci quas natus voluptatem, soluta nesciunt
                  cupiditate reprehenderit cumque mollitia, delectus quae in
                  temporibus sed tempore quam iure provident voluptate sint.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop_btn">
                  <Link to="shop">Shop Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col>
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">trending products</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer-count ">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down_col">
              <div className="clock_top_content">
                <h4 className="text-white fs-6 mb-2">limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="shop_btn srore_btn"
              >
                <Link to="shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterimg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals  ">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category ">
      <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2 className="section_title">Popular in category </h2>
            </Col>
            <ProductList data={popularProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
