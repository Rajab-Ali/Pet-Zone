const PostReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_POST':
            const id = state.posts.length+1

            state.posts.push({
                ...action.payload,
                postId:id,
            })
            console.log(state.posts);
            return {
                ...state,
            }
        case 'LIKE':
            return {
                ...state,
                posts:state.posts.map(post=> {
                    let newpost ={}
                    if(post.postId===action.payload.postId){
                        newpost = {...post,postLikes:action.payload.postLikes+1}
                        return newpost
                    }
                    else{
                        return post
                    }
                }),
            }
            case 'DISLIKE':
                return {
                    ...state,
                    posts:state.posts.map(post=> {
                        let newpost ={}
                        if(post.postId===action.payload.postId){
                            newpost = {...post,postLikes:action.payload.postLikes-1}
                            return newpost
                        }
                        else{
                            return post
                        }
                    }),
                }
    }
}
export default PostReducer