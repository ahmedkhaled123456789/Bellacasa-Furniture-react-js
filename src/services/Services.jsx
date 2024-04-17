import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import {motion} from 'framer-motion'
import './Services.css';
import servicesData from "../assets/data/serviceData";
const Services = () => {
  return <section className="services">
     <Container>
      <Row>
        {servicesData.map((item) =>(
 <Col lg='3' md='4'>
 <motion.div whileHover={{scale:1.1}} className="sevices_item" style={{backgroundColor: item.bg}} >
   <span><i className={item.icon}></i></span>
   <div>
     <h3>{item.title}</h3>
     <p>{item.subtitle}</p>
   </div>
 </motion.div>


</Col>
        ))}
       
      </Row>
     </Container>
  </section>
}

export default Services