import { useState } from 'react'
import './App.css'
import { Square } from './components'

function App() {
  const [values, setValue] = useState(new Array(9).fill('_'))
  const [step,setStep] = useState(true)
  const onClick = (value:any) => {
    const move = step? 'X' : 'O'
    setValue(values.map((square,id) => {
      return id == value? move : values[id]
    }))
    setStep(!step)
};
  // const 
  return (
    <div className="App">
      {values.map((value,id) => {
        return <Square key={id} value={value} values={values} onClick={onClick} id={id}/>
      }) }
    </div>
  )
}

export default App


// const winLine = (array: any) => {

// }