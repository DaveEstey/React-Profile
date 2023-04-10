import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import  About  from './components/pages/About'
import Contact  from './components/pages/Contact'
import Projects  from './components/pages/Projects'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
// import { Resume } from ''

const App = () => {
return (
    <BrowserRouter>  
    <Navbar/>
    <Header/>
    <Routes>
    <Route path='/react-profile' Component= { About } />
    <Route path='/' Component= { About } />
    <Route path='/contact' Component= { Contact } />
    <Route path='/projects' Component= { Projects } />
    <Route path='/resume' Component= { Contact }/>
    <Route path='/react-profile/contact' Component={ Contact }/>
    </Routes>
    <Footer/>

    </BrowserRouter>
    )   
}

export default App;
