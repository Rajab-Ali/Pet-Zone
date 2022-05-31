import React from 'react'
import {useNavigate} from 'react-router-dom'
import Rating from 'react-rating'
import ProductImg from '../../Images/catfood.png'
import './productcard.css'
const  Index = () => {
  const history = useNavigate()
  return (
    
    <div className="card product-card">
    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src={ProductImg} style={{height:'250px', objectFit:'100% 100%', width:'100%'}} className="img-fluid"/>
      <a >
        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
      </a>
    </div>
    <div className="card-body">
      <h5 className="card-title">Sample Product</h5>
      <p className="card-text">Price: $60.99</p>
      <p>
  
      <Rating
                        style={{ color: "#ff8000" }}
                        fractions={5}
                        emptySymbol="fa-regular fa-star"
                        fullSymbol="fa-solid fa-star "
                        initialRating={3.5}
                        />
                        </p>
      <a onClick={()=> history('/product-detail')} className="btn btn-primary">View Details</a>
    </div>
  </div>
  
  )
}

export default Index