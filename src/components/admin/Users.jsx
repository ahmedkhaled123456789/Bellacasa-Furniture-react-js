import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { db } from "../../Firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import useGetData from "../../Hook/useGetData";

const Users = () => {
  const { data, loading } = useGetData("users");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("User Deleted!");
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Users</h4>
          </Col>
          <Col lg="12" className="pt5">
            <table className="table">
              <thead>
                <tr>
                  <th>Images</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h5 className="pt-5 fw-boled">Loading.....</h5>
                ) : (
                  data.map((item) => (
                    <tr key={item.uid}>
                      <td>
                          <img src={item.photoUrl} alt="" />
                        </td>
                      <td>{item.displayName}</td>
                      <td>{item.email}</td>
                      <td><button className="btn btn-danger"onClick={() => deleteUser(item.uid)} >Delete</button> </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;
