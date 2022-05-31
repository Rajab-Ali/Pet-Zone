import React, {useState} from 'react'
import './productDescription.css'
import Rating from 'react-rating'
import ProductImg from '../../Images/catfood.png'
import ReviewCard from '../../Components/ReviewCard'
import WriteReview from '../../Components/WriteReview'
import Layout from '../../Layout'
const Index = () => {
    const [size, setSize] = useState('')
    return (
        <Layout>
        <section>
          <div className='product-detail-main-cont'>
            <div className='col-md-5 product-img-cont'>
              <img className='product-detail-img' src={ProductImg}  alt='Product Image' loading='lazy' />
              <ul className='product-more-img-list'>
                <li className='list-item'>
                  <img className='product-more-img' src={ProductImg} alt='Product more Image' loading = 'lazy' />
                </li>
                <li className='list-item'>
                  <img className='product-more-img' src={ProductImg} alt='Product more Image' loading = 'lazy' />
                </li>
                <li className='list-item'>
                  <img className='product-more-img' src={ProductImg} alt='Product more Image' loading = 'lazy' />
                </li>
                <li className='list-item'>
                  <img className='product-more-img' src={ProductImg} alt='Product more Image' loading = 'lazy' />
                </li>
              </ul>
            </div>
            <div className='ml-3 col-md-5'>
            <div className='product-description-cont'>
              <h2 className='Product-detail-name'>Leather Jacket for Mens, Stylish Jacket</h2>
              <h4 style={{fontSize:'16px'}}>Product Id: <span style={{marginLeft:'5px',color:'grey', fontSize:'14px', fontWeight: 'lighter'}}>234567898</span></h4>
              <Rating
              style={{ color: "#ff8000", marginTop:'10px'}}
              fractions={5}
              emptySymbol="fa-regular fa-star"
              fullSymbol="fa-solid fa-star "
              initialRating={3.5}
              />
              <p style={{marginTop:'10px',color:'lightblue', fontSize: '18px', fontWeight:'700'}}>Price: $200</p>
              <form className='col-md-2'>
                <div className='form-floating mt-3 mb-3'>
                <select onChange={(e)=> {
                  setSize(e.target.value)
                  console.log(size);
                }} class="form-select" id="floatingSelectGrid" aria-label="Floating label" value={size}>
          <option defaultChecked></option>
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
          <option value="xl">xl</option>
          <option value="xxl">xxl</option>
        </select>
        <label for="floatingSelectGrid">Size</label>
                </div>
              </form>
              <br />
              <h4 style={{margin:'0px'}}>Description</h4>
              <p className='pt-3 description-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='buttons-cont'>
                  <button className=' btn btn-primary mt-3'>Add to Cart</button>
                  <button className=' btn btn-outline mt-3'>Proceed to Checkout</button>
            </div>
            </div>
          </div>
        <div className='mt-5 p-4 mb-5 col-md-10 rewiew-cont'> 
              <h2>Customer Reviews</h2>
              <div className='mt-4'>
              <ReviewCard />  
              <ReviewCard />  
              <ReviewCard />  
              </div>
              <div className='mt-5'>
              <WriteReview />
              </div>
        </div>
        </section>
        </Layout>
    )
}

export default Index