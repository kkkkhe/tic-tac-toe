import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Square } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Square/>
      <Square/>
      <Square/>

      <Square/>
      <Square/>
      <Square/>

      <Square/>
      <Square/>
      <Square/>
      
    </div>
  )
}

export default App
