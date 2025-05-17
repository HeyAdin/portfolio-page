import { useState } from 'react'
import { Home } from './components/home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='main'>
      <Home />
    </main>
  )
}

export default App
