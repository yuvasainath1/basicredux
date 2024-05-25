import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <> 
      <h1>Balance Enquiry</h1>
      Change to be incurred &nbsp;
      <input id='Inputbox' style={{padding:'1.5% 1.5% 1.5% 1.5%'}}/>
      <div className="card">
        <button >
          decrease
        </button>
        <p>
          Your Balance is 
        </p>
        <button >
          increase
        </button>
        </div>
    </>
  )
}

export default App
