import React from 'react'
import AddProducts from './AddProducts'
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import '../../style/DashBoard.css'
import useGetData from "../../Hook/useGetData";

const Dashboard = () => {
  const { data:user } = useGetData("users");
  const { data:products } = useGetData("products");


  return <section>
<Container>
  <Row>
    <Col lg='3'>
      <div className="revenue_box">
        <h5>Total Sales</h5>
        <span>$400</span>
      </div>
    </Col>
    <Col lg='3'>
      <div className="order_box">
        <h5>Order</h5>
        <span>0</span>
      </div>
    </Col>
    <Col lg='3'>
      <div className="products_box">
        <h5>Products</h5>
        <span>{ products&& products.length}</span>
      </div>
    </Col>
    <Col lg='3'>
      <div className="users_box">
        <h5>Users</h5>
        <span>{user&& user.length}</span>
      </div>
    </Col>

  </Row>
</Container>
  </section>
}

export default Dashboard