import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import data from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useParams } from "react-router-dom";
import ProductList from '../components/UI/ProductList';
import "../style/Product-details.css";
import { motion } from "framer-motion";
import {useDispatch,useSelector} from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductsDetails = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser= useRef('');
  const reviewMsg= useRef('');
  const { id } = useParams();
  const product = data.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    description,
    reviews,
    price,
    avgRating,
    shortDesc,
    category,
  } = product;
  const dispatch= useDispatch();
  //add to cart function

  const addToCart =() =>{
    dispatch(cartActions.addItem({
      id:product.id,
      productName:product.productName,
      price:product.price,
      image: product.imgUrl,

    }))
    toast.success('Product added  successfully')
  }

  useEffect(() =>{
window.scrollTo(0,0);
  },[product])
  // relatedProducts
  const relatedProducts = data.filter(
    (product) => product.category === category
  );

// submit reviews

const submitHandler =(e) =>{
e.preventDefault();

const reviewUserName = reviewUser.current.value;
const reviewUserMsg = reviewMsg.current.value;
const reviewObj={
  userName :reviewUserName ,
  text: reviewUserMsg,
  rating,
}
if(reviewUserName === ''||reviewUserMsg === ''|| rating=== null){
  toast.error('please complate ')
  return ;

}else{
  toast.success('review added  successfully')

}

}

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2>{productName}</h2>
                <div className="product_rating d-flex align-items-center gap-5">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <p>
                    ( <span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5 mt-2"> 
                <span className="product_price">${price}</span>
                <span>Category:{category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop_btn" onClick={addToCart}>
                  add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc"} ? "tab_active" :""`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev"} ? "tab_active" :""`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab_content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product_review mt-5">
                  <div className="review_wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Ahmed Khaled</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review_form">
                      <form action="" onSubmit={submitHandler}>
                        <h4>Leave your experience</h4>
                       
                        <div className="form_group d-flex align-items-center gap-5 rating_group">
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(1)}>
                            {" "}
                            <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(2)}>
                            {" "}
                            <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(3)}>
                            {" "}
                            <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(4)}>
                            {" "}
                            <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(5)}>
                            {" "}
                            <i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>
                        <div className="form_group">
                          <input type="text" placeholder="Enter Name" ref={reviewUser} />
                        </div>
                        <div className="form_group">
                          <textarea
                            rows={4}
                            type="text"
                            placeholder="Review message.."
                            ref={reviewMsg}
                          />
                        </div>
                        <motion.button whileTap={{scale:1.2}} type="submit" className="shop_btn">
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related_title">You Might also like</h2>
            </Col>

            <ProductList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductsDetails;
