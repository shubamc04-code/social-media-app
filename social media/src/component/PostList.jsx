import { useContext } from "react";
import Post from "./Post";
import "./PostList.css";
import { PostList as PostListData } from "../store/post-list-store";

const PostList =() => {
    const { postlist } = useContext(PostListData)
    return (
    <div className="PostList">
     {postlist.map((post) => (
        <Post key={post.id} post ={post}/>
     ))}
    
    
    </div>
    );
}
 export default PostList;