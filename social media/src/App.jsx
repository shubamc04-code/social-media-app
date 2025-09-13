import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';
import Footer from './component/Footer';
import SideBar from './component/SiderBar';
import CreatePost from './component/CreaterPost';



function App() {
 return (
    <div className='app-container'>
     <SideBar></SideBar>
     <div className='content'>
     <Header></Header> 
     <CreatePost></CreatePost>
     <Footer></Footer>
     </div>
    </div>
  )
}

export default App
