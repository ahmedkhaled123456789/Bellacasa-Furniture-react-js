import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { db, storage } from "../../Firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [shourtDesc, setShortDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    // add product to the  firebase database
    try {
      const docRef = await collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + productImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, productImg);

      uploadTask.on(
        () => {
          toast.error("image not uploaded");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            await addDoc(docRef, {
              title,
              description,
              shourtDesc,
              price,
              category,
              imgURL: downloadUrl,
            });
          });
          setLoading(false);

          toast.success("product successfully added! ");
          navigate("/dashboard-all-products");
        }
      );
    } catch (err) {
      setLoading(false);

      toast.error("product not added!");
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-4">Loading....</h4>
            ) : (
              <>
                <h4 className="mb-5">Add Product</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className="form_group">
                    <span>Product Title</span>
                    <input
                      type="text"
                      placeholder="Douple Sofa... "
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder="Lorem... "
                      value={shourtDesc}
                      onChange={(e) => setShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Description... "
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-5 ">
                    <FormGroup className="form_group w-50">
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder=" $100"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="form_group w-50">
                      <span>Category</span>
                      <select
                        className="w-100 p-2"
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                        required
                      >
                        <option >Select Category</option>

                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="watch">Watch</option>
                        <option value="mobile">Mobile</option>
                        <option value="wireless">Wireless</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className="form_group">
                      <span>Add Image</span>
                      <input
                        type="file"
                        onChange={(e) => setProductImg(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>
                  <button className="shop_btn">Add product</button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
