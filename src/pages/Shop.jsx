import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import '../style/Shop.css';
import data from '../assets/data/products';
import ProductList from "../components/UI/ProductList";

const Shop = () => {
  const [products,setProducts]=useState(data);
const handleSearch=(e) =>{
  const searchTerm= e.target.value;
  const searchedProduct= products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()) )
setProducts(searchedProduct) ;
}
  const handleFilter=(e) =>{
const filterValue= e.target.value;
if(filterValue === 'sofa'){
  const filteredProducts= products.filter((item) => item.category === 'sofa');
  setProducts(filteredProducts)
}

if(filterValue === 'chair'){
  const filteredProducts= products.filter((item) => item.category === 'chair');
  setProducts(filteredProducts)
}

if(filterValue === 'mobile'){
  const filteredProducts= products.filter((item) => item.category === 'mobile');
  setProducts(filteredProducts)
}
if(filterValue === 'watch'){
  const filteredProducts= products.filter((item) => item.category === 'watch');
  setProducts(filteredProducts)
}

if(filterValue === 'wireless'){
  const filteredProducts= products.filter((item) => item.category === 'wireless');
  setProducts(filteredProducts)
}
  }
  return (
    <Helmet title="Shop">
      
      <CommonSection title="products" />
<section>
<Container >
        <Row>
          <Col lg="3" md='6'>
            <div className="filter_widget">
              <select  onChange={handleFilter}>
                <option >Filter by category</option>
                <option value="sofa">sofa</option>
                <option value="mobile">mobile</option>
                <option value="chair">chair</option>
                <option value="watch">watch</option>
                <option value="wireless">wireless</option>

              </select>
            </div>
          </Col>
          <Col lg="3" md='6' className="text-end">
          <div className="filter_widget">
              <select >
                <option >sort  by</option>
                <option value="ascending">ascending</option>
                <option value="decrnding">decrnding</option>

              </select>
            </div>
          </Col>
          <Col lg="6" md='12'>
<div className="search_box">
  <input type="text" placeholder="search......." onChange={handleSearch} />
  <span>
    <i class="ri-search-line"></i>
  </span>
</div>

          </Col>

        </Row>
      </Container>
</section>

      <section className="pt-0">
        <Container>
          <Row>
            {products.length === 0 ? (<h1 className="text-center fs-4">no products are found !</h1>) :
           ( <ProductList data={products}/>)
            }
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
