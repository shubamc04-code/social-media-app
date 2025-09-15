import { createContext, useReducer } from "react";
 
export const PostList = createContext({
             postList :[],
             addPost: () => {},
             deletePost : () => {},
 });

   const postListReducer =(currPostList, action) => {
    return currPostList;
   };
 const PostListProvider = ({children}) =>{
   const [postList, dispatchPostList] =useReducer(postListReducer, DEFAULT_POST_LIST);

   const addPost =() => {}

   const deletePost =() => {}

    return <PostListProvider value={
        { postList,
         addPost,
        deletePost,}
    }>{children}</PostListProvider>
 }
const DEFAULT_POST_LIST =[
  {
   id: '1',
   title:'journy',
   body :'going to  the home',
   reaction :3,
   userId:'user-9',
   tags:['mumbai ','delhi'],  
},
 {
   id: '2',
   title:'journy',
   body :'going to  the newyork',
   reaction :3,
   userId:'user-2',
   tags:['mumbai ','newyorkcity'],  
}
]
 export default PostListProvider;