import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import BlogView from './pages/BlogView'
import MyProfile from './pages/MyProfile'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Edit from './pages/Edit'
import Footer from './components/Footer'
import { useState } from 'react'
import Add from './pages/Add'



function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };
  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home blogs={blogs}/>}/>
      <Route path='/:id/view' element={<BlogView/>}/>
      <Route path='/:id/edit' element={<Edit/>}/>
      <Route path='/profile' element={<MyProfile blogs={blogs}/>}/>
      <Route path='/addBlog' element={<Add addBlog={addBlog}/>}/>
      <Route path='/pnf' element={<Pnf/>}/>
     </Routes>
     <Footer/>
        
    </>
  )
}

export default App
