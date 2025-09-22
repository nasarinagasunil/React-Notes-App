import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home/home'
import {Routes, Route} from 'react-router-dom'
import { Archive } from './pages/Archive/archive'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/archive' element={<Archive />} />
      </Routes>
    </>
  )
}

export default App
