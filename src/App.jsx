import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Home, Projects, Contact, Resume } from './pages'
import { Navbar } from './components'
import './App.css'


//TODO - Hamburger Nav menu 

//TODO - Pick a color scheme (semanticUI)
//TODO - Find more inspiration on how I want the layout


function App() {
  const [showNav, setShowNav] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setShowNav(true)
    }, 1500)
  }, [])

  return (
    <div className="App">
      <CSSTransition
        in={showNav}

        timeout={300}
        classNames="fade slide-top"
        unmountOnExit
      >

        <Navbar />
      </CSSTransition>


      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>




    </div>
  )
}

export default App
