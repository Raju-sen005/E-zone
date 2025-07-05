// App.js
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login'
import Edius11 from './pages/Edius11'
import AlbumSense from './pages/AlbumSense';
import CutSense from './pages/CutSense';
import VideoEditing from './pages/VideoEditing';
import Blog from './pages/Blog';
import Download from './pages/Download';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductQuickviewModal from './components/ProductQuickView';
import WishList from './pages/WishList';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/edius11' element={<Edius11/>}/>
        <Route path='/albumsense' element={<AlbumSense/>}/>
        <Route path='/cutsense' element={<CutSense/>}/>
        <Route path='/video-editing' element={<VideoEditing/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/downloads' element={<Download/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/quickview' element={<ProductQuickviewModal />} />
        <Route path='/wishlist' element={<WishList />} />
      </Routes>
  );
}

export default App;
