import { useState } from 'react'
import reactLogo from './assets/logo.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
       <div className="logo-container">
          <img src={reactLogo} alt="React Logo" />
          <div className="logo-txt">
            <span>summerly</span>
            <span>media</span>
          </div>
        </div>
      </header>
    </main>
  )
}

export default App
