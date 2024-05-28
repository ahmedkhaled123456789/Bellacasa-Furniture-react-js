import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
 import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
  const year= new Date().getFullYear;
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md='6'>
            <div className="logo">
              
              <div>
                <h1 className="text-white">BellaCasa</h1>
              </div>
            </div>
            <p className="footer_text md-3 mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              molestias neque, laborum ullam nesciunt vitae libero eum ab, modi
              iusto saepe amet nam nobis molestiae similique itaque qui aperiam
              sunt.
            </p>
          </Col>
          <Col lg="3" className="mb-4" md='3'>
            <div className="footer_quick_links">
              <h4 className="quick_links_title">Top Category</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phone</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" className="mb-4" md='3'>
            <div className="footer_quick_links">
              <h4 className="quick_links_title"> Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md='4'>
            <div className="footer_quick_links">
              <h4 className="quick_links_title">Contact</h4>
              <ListGroup className="footer_contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p> 123 Saeed Street Tanta, Egypt</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p> 01068366419</p>{" "}
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i className="ri-mail-line"></i></span>
                   <p> ahmed1999khaled1999@gamil.com</p>
                 </ListGroupItem>

                
              </ListGroup>
            </div>
          </Col>
          <Col lg='12' >
            <p className="footer_copyright">CopyRight {year} developed by Company</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
