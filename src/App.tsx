import { useState } from 'react'
import {Logo} from './components/logo.tsx'
import {Arrow} from './components/arrow.tsx'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main >
      <header className='header-container'>
          <Logo/>
          <div className="menu-options">
            <a>What we offer</a>
            <a>How it works</a>
            <a>Portfolio</a>
          </div>
          <button>
            <div className="btn-face-white">
              Contact us
              <Arrow />
            </div>
            <div className="btn-face-purple"> 
              Contact us
              <Arrow />
            </div>
          </button>
      </header>
    </main>
  )
}

export default App
