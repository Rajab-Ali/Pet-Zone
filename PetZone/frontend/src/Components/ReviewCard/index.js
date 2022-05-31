import React from 'react'
import Rating from 'react-rating'
import './reviewcard.css'
const Index = () => {
  return (
    <div className='col-md-10 review-card'>
        <h2>Awais Jutt</h2>
        <p style={{color:'gray'}}>Islamabad, Pakistan</p>
        <Rating 
            style={{ color: "#ff8000" }}
            fractions={5}
            emptySymbol="fa-regular fa-star"
            fullSymbol="fa-solid fa-star "
            initialRating={3.5}
        />
        <p style={{fontSize:'14px',wordBreak:'keep-all', marginTop:'16px'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        <div className='line'></div>
    </div>
  )
}

export default Index