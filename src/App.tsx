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
        <div className="bubble target" >
          <img src="https://assets-global.website-files.com/63d0f8b43ca85422d48a69d6/63d187a9967765985b4ada30_direct-hit.png" style={{ width: 70, height: 70 }} loading="lazy" alt="" />
        </div>
        <div className="bubble shop" >
          <img src="https://assets-global.website-files.com/63d0f8b43ca85422d48a69d6/63d187a8a7449241d438c9b9_shopping-bags.png" style={{ width: 24, height: 24 }} loading="lazy" alt="" />
        </div>        
        <div className="bubble rocket" >
          <img src="https://assets-global.website-files.com/63d0f8b43ca85422d48a69d6/63d187a871aadbac60940662_rocket.png" style={{ width: 40, height: 40 }}  loading="lazy" alt="" />
        </div>        
        <div className="bubble fire" >
          <img src="https://assets-global.website-files.com/63d0f8b43ca85422d48a69d6/63d1807dd0496a3408c33ef6_fire.png" style={{ width: 24, height: 24 }} loading="lazy" alt=""  />
        </div>
        {/* <div className="bubble cat" >
          😺
        </div> */}
      </div>
    </main>
  )
}

export default App
