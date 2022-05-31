import React from 'react'
import './writereview.css'
import Rating from 'react-rating'
const Index = () => {
  return (
    <div className='mt-4 col-md-10 review-card'>
        <h4>Write Your Comment here</h4>
        <Rating
            style={{ color: "#ff8000", marginTop:'10px'}}
            fractions={5}
            emptySymbol="fa-regular fa-star"
            fullSymbol="fa-solid fa-star " 
            />
        <form className='mt-4 mb-5'>
        <div className="form-floating">
            <input id='floatingCommentName' className="form-control" type="text" placeholder=" " />
            <label for='floatingCommentName' >Your Name</label>
        </div>
        <div className=" mt-3 form-group">
            <textarea id='floatingCommentName' cols={10} rows={5} className="form-control" type="text" placeholder="Write your comment here....." />
        </div>
        <div className='mt-3 form-group d-flex justify-content-end'>
          <button type='submit' className='btn btn-primary px-4'>Post</button>
        </div>
        </form>
    </div>
  )
}

export default Index