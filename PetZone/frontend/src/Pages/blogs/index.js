import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Layout'
import CreateBlog from '../../Components/CreateBlog'
import BlogCard from '../../Components/ShowBlog'
import ProfileImg from '../../Images/profileImg.jpg'
//context
import { blogContext } from '../../blogContext/blogContext'

//styling
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

    const useBlogContext = useContext(blogContext)
    const { blogs, addBlog, likeBlog, dislikeBlog} = useBlogContext

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
                    <CreateBlog addBlog={addBlog} blogAuthor={'Isha Malik'} authorImage={ProfileImg} setBanner={setBanner} setVariant={setVariant} />
                    <div className='mt-3'>
                      {
                        blogs.map(blog=>{
                          return <BlogCard 
                          key={blog.blogId}
                          blogTitle={blog.blogTitle}
                          blogAuthor={blog.blogAuthor}
                          blogImage={blog.blogImage}
                          blogDescription={blog.blogDescription}
                          blogId={blog.blogId}
                          blogLikes= {blog.blogLikes}
                          likeBlog= {likeBlog}
                          dislikeBlog = {dislikeBlog}
                          />
                        })
                      }

                    </div>
              </div>
          </div>
        </div>
        </Layout>      
  )
}

export default Index