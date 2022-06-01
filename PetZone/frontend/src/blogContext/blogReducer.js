const blogReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_BLOG':
            const id = state.blogs.length+1

            state.blogs.push({
                ...action.payload,
                blogId:id,
            })
            console.log(state.blogs);
            return {
                ...state,
            }
        case 'LIKE_BLOG':
            return {
                ...state,
                blogs:state.blogs.map(blog=> {
                    let newpost ={}
                    if(blog.blogId===action.payload.blogId){
                        newpost = {...blog,blogLikes:action.payload.blogLikes+1}
                        return newpost
                    }
                    else{
                        return blog
                    }
                }),
            }
            case 'DISLIKE_BLOG':
                return {
                    ...state,
                    blogs:state.blogs.map(blog=> {
                        let newpost ={}
                        if(blog.blogId===action.payload.blogId){
                            newpost = {...blog,blogLikes:action.payload.blogLikes-1}
                            return newpost
                        }
                        else{
                            return blog
                        }
                    }),
                }
    }

}
export default blogReducer