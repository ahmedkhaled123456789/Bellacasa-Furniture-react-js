import React from 'react'
import productImg from '../../assets/images/arm-chair-01.jpg';
import { motion } from 'framer-motion';
import '../../style/Product-card.css'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
 
const ProductCard = ({product}) => {
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
  return (
    <Col lg='3' md='4' className='mb-2'> 
    <div className='product_item '>
       <div className="product_img">
        <motion.img whileHover={{scale:0.9}} src={product.imgUrl} alt="" />
        </div>
        <div className="p-2 product_info">
       <h3><Link to={`/shop/${product.id}`}>{product.productName}</Link> </h3>
        <span >{product.category}</span>
       </div>
        <div className="product_card_bottom d-flex align-items-center justify-content-between  p-2">
          <span className="price"> ${product.price} </span>
          <motion.span whileTap={{scale:1.2}}  onClick={addToCart}>
            <i className='ri-add-line'></i>
          </motion.span>
        </div>
         </div>
    </Col>
    
  )
}

export default ProductCard