import React from 'react'
import { Link, Outlet, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import Divider from './components/divider'
import Feature from './components/Feature'
import Contact from './components/Contact'
// import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <>
          {/* <Navbar /> */}
          <main>
           <Hero/>
            <Divider/>
    
          
            <div className="container marketing">
    
              <div className="row">
               
               <Card/>
               <Card/>
               <Card/>
    
              </div>
    
              <Divider/>
                <Feature direction={'reverse'}/>
              <Divider/>
                <Feature/>
              
            </div>
    
            <Contact/>
          </main>
    
    
        </>
      )
}

export default Home