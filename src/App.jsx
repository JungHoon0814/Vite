import { useState } from 'react';
import { Routes, Route } from 'react';
import About from './pages/About.jsx';
import Root from './pages/Root.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <div className="App">
      <Routes>
        <Route path='/' element={<Root/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </div>
    </>
  )
}

export default App;
