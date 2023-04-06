import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import  About  from './components/pages/About'
import Contact  from './components/pages/Contact'
import Projects  from './components/pages/Projects'
import Navbar from './components/Navbar';
import Header from './components/Header';
// import { Resume } from ''

const App = () => {
return (
    <BrowserRouter>  
    <Navbar/>
    <Header/>
    <Routes>
    <Route path='/' Component= { About } />
    <Route path='/contact' Component= { Contact } />
    <Route path='/projects' Component= { Projects } />
    <Route path='/resume' Component= { Contact }/>
    </Routes>
    </BrowserRouter>
    )   
}

export default App;
