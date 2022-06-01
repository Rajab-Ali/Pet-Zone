import React, { createContext, useReducer } from 'react'
import PostReducer from './postReducer'

export const postContext = createContext()

const initialState = {
    posts:[    
    {
    postId:1,
    postAuthor:'M Fahad',
    authorImage:require('../Images/profileImg.jpg'),
    postDescription:'hey, this is my grey cat.',
    postImage:require('../Images/greycat.jpg'),
    postLikes:12
  },
  {
    postId:2,
    postAuthor:'M Ali',
    authorImage:require('../Images/profileImg.jpg'),
    postDescription:'hey, this is my Husky.',
    postImage:require('../Images/husky.jpg'),
    postLikes:12
  }
]}
const PostContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(PostReducer,initialState)
    const addPost = (post)=> dispatch({type:'ADD_POST',payload:post})
    const like = (post)=> dispatch({type:'LIKE',payload:post})
    const dislike = (post)  => dispatch({type:'DISLIKE',payload:post})
    const postContextValues={
        ...state,
        addPost,
        like,
        dislike,
    }
  return (
    <postContext.Provider value={postContextValues} >
        {
            children
        }
    </postContext.Provider>
  )
}

export default PostContextProvider