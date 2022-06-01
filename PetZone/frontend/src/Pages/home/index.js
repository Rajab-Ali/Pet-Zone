import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Layout'
import CreatePostCard from '../../Components/CreatePost'
import NewsFeedCard from '../../Components/NewsFeedCard'
import ProfileImg from '../../Images/profileImg.jpg'
//Context
import { postContext } from '../../postContext/postContext'
// styling
import './home.css'
import Alert from "react-bootstrap/Alert";



const Index = () => {
  const [banner,setBanner] = useState(false)
  const [variant,setVariant] = useState()

  useEffect(()=>{
    const timer = setTimeout(() => {
      setBanner(false)
    }, 3000);
    console.log('test');
    return () => clearTimeout(timer);
  },[banner])


  const usePostContext = useContext(postContext)
  const {posts,addPost,like,dislike} = usePostContext

  return (
        <>     
    <Layout>
        <div className='col-md-12'>
          <div style={{zIndex:'1000'}}>
        <Alert variant={variant} show={banner} style={{textAlign:'center'}} >
            Your post has been uploaded
        </Alert>
          </div>
          <div className='col-md-7 news-feed-cont'>
              <div className='news-feed-body'>
                <CreatePostCard addPost={addPost} postAuthor={'Isha'} authorImage={ProfileImg} banner={banner} setBanner={setBanner} setVariant={setVariant}    />
                <div className='mt-3'>
                    {
                      posts.map(post=> {
                       return <NewsFeedCard key={post.postId}
                        postId = {post.postId}
                        postAuthor={post.postAuthor}
                        authorImage = {post.authorImage} 
                        postDescription = {post.postDescription}
                        postImage = {post.postImage}
                        postLikes = {post.postLikes} 
                        like= {like}
                        dislike = {dislike}
                        />
                      })
                    }
                    
                    
                </div>
              </div>
          </div>
        </div>
    </Layout>
        </>
  )
}

export default Index