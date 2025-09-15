import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';
import Footer from './component/Footer';
import SideBar from './component/SiderBar';
import CreatePost from './component/CreaterPost';
import PostList from './component/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';



function App() {
const [selectTab] = useState("CreatePost");
 return (
   <PostListProvider>
    <div className='app-container'>
     <SideBar selectTab={selectTab}/>
     <div className='content'>
     <Header /> 
     {selectTab ==="Home"? (<PostList />):(<CreatePost />)}
     <Footer />
     </div>
    </div>
    </PostListProvider>
  )
}

export default App
