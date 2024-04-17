import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.config";

import {   toast } from "react-toastify";
import "../style/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
console.log(user)
      setLoading(false);
      toast.success("successfully logged in");
      navigate("/checkout");
    } catch (erorr) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          {loading ? (
            <Col lg="12" className="text-center">
              <h4 className="fw-bold"> Loading......</h4>
            </Col>
          ) : (
            <Row>
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold fs-4"> Login</h3>
                <Form className="auth_form mt-4" onSubmit={signIn}>
                  <FormGroup className="form_group">
                    <input
                      type="email"
                      placeholder="Enter you email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      placeholder="Enter you password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button className="shop_btn login_btn">Login</button>
                  <p>
                    Don't have an account?
                    <Link to="/signup">Create an account</Link>{" "}
                  </p>
                </Form>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
