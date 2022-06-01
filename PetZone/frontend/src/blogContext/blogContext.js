import React, { createContext, useReducer } from 'react'
import blogReducer from './blogReducer'

export const blogContext = createContext()

const initialState = {
    blogs:[    
    {
    blogId:1,
    blogAuthor:'M Fahad',
    blogTitle:'Little Persian Cats',
    blogDescription:'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in English-speaking countries. The first documented ancestors of Persian cats were imported into Italy from Persia around 1620.',
    blogImage:require('../Images/blogImg1.jpg'),
    blogLikes:12
  },
  {
    blogId:2,
    blogAuthor:'M Ali',
    blogTitle:'Serbian husky',
    blogDescription:'hey, this is my Husky.',
    blogImage:require('../Images/husky.jpg'),
    blogLikes:12
  }]
}

const BlogContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(blogReducer,initialState)
    const addBlog = (blog)=> dispatch({type:'ADD_BLOG', payload:blog})
    const likeBlog = (blog) => dispatch({type:'LIKE_BLOG',payload:blog})
    const dislikeBlog = (blog) => dispatch({type:'DISLIKE_BLOG',payload:blog})
    
    const blogContextValues= {
        ...state,
        addBlog,
        likeBlog,
        dislikeBlog,
    }

  return (
    <blogContext.Provider value={blogContextValues}>
        {children}
    </blogContext.Provider>
  )
}

export default BlogContextProvider