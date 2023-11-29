import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route exact path='/' Component={Create} />
        <Route exact path='/read' Component={Read} />
        <Route path='/update' Component={Update} />
      </Routes>
      </Router>
    </>
  )
}

export default App;
