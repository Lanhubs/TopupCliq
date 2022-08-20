import { useState } from 'react'

import './App.css'

import HomePage from './pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full p-0'>
        <HomePage/>
    </div>
  )
}

export default App
