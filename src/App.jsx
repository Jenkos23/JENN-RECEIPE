
import './App.css'
import React from 'react';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import RecipeDetail from './pages/recipeDetail.jsx';
import Search from './pages/search.jsx';
import Navbar from './components/navBar.jsx';

function App() {

  return (
   <Router>
   <Navbar />
   <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/recipe/:id" component={<RecipeDetail/>} />
    <Route path="/search"element={<Search/>} />
   </Routes>
    
 
  </Router>
  )
}

export default App
