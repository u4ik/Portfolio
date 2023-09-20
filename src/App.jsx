import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Popup, Icon } from 'semantic-ui-react'
import { Home, Projects, Contact, Resume } from './pages'
import { Navbar, Sidebar } from './components'
import './App.css'

//TODO - Pick a color scheme (semanticUI)

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showSide, setShowSide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true)
    }, 1500)
    setTimeout(() => {
      setShowSide(true)
    }, 1500)
  }, [])

  return (
    <div className="App">
      <CSSTransition in={showNav} timeout={300} classNames="fade slide-top" unmountOnExit>
        <Navbar />
      </CSSTransition>
      <CSSTransition in={showNav} timeout={300} classNames="fade slide-bottom" unmountOnExit>
        <Sidebar />
      </CSSTransition>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div >
  )
}

export default App
