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
            <div className="btn-face-purpple"> 
              Contact us
              <Arrow />
            </div>
          </button>
      </header>
      <div className="content-container">
        <h1>Get the best <span>design</span> for your website</h1>
        <div className="bubble_target" >
          😺
        </div>
        <div className="bubble_target" >
          😺
        </div>
      </div>
    </main>
  )
}

export default App
