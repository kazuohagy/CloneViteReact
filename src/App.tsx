import { useState } from 'react'
import {Logo} from './components/logo.tsx'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
       <div className="logo-container">
          <Logo/>
        
        </div>
      </header>
    </main>
  )
}

export default App
