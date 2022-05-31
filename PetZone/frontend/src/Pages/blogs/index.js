import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import CreateBlog from '../../Components/CreateBlog'
import BlogCard from '../../Components/ShowBlog'
import BlogImg1 from '../../Images/blogImg1.jpg'
import BlogImg2 from '../../Images/blogImg2.jpg'

import Alert from "react-bootstrap/Alert";

const Index = () => {
    const [banner,setBanner] = useState(false)
    const [variant,setVariant]= useState('')
    useEffect(()=>{
        const timer = setTimeout(() => {
            setBanner(false)
          }, 3000);
          console.log('test');
          return () => clearTimeout(timer);
    },[banner])
  return (
        <Layout>
            <div className='col-md-12'>
          <div style={{zIndex:'1000'}}>
        <Alert variant={variant} show={banner} style={{textAlign:'center'}} >
            Your Blog has been uploaded successfully
        </Alert>
          </div>
          <div className='col-md-7 news-feed-cont'>
              <div className='news-feed-body'>
                    <CreateBlog setBanner={setBanner} setVariant={setVariant} />
                    <div className='mt-3'>
                        <BlogCard heading={'Little Persian Cats'} postedby={'Ch. Rajab Ali'} blogImg={BlogImg1} />
                        <BlogCard heading={'Siberian Husky'} postedby={'Fahad'} blogImg={BlogImg2} />
                    </div>
              </div>
          </div>
        </div>
        </Layout>      
  )
}

export default Index