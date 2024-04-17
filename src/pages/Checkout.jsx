import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import {useDispatch,useSelector} from 'react-redux';

import '../style/Checkout.css';
const Checkout = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQty = useSelector((state) => state.cart.totalQuantity);

  return (
    <Helmet title="Check out">
      <CommonSection title="Check out" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h2 className="mb-4 fw-bold">Billing Information</h2>

              <Form action="" className="pilling_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your Name" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your Email" />
                </FormGroup>
                 <FormGroup className="form_group">
                  <input type="text" placeholder=" Phohe Number" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder=" Street Address" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder=" City" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder=" Postal Code" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder=" Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_form">
               <h6>Total Qty:<span>{totalQty} items</span></h6>
               <h6>Subtotal:<span>${totalAmount}</span></h6>
               <h6>
               
               <span>
               Shipping:<br />Free Shipping</span>
                <span>$0</span></h6>
                <h4> Total Cost:<span>${totalAmount}</span></h4>
                <button className="shop_btn auth_btn w-100">Place an order</button>

              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
