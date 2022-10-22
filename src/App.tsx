import { useState } from 'react'
import './App.css'
import { Restart, Square } from './components'

function App() {
  const [values, setValue] = useState(new Array(9).fill(null))
  const [step,setStep] = useState(true)
  const onClick = (value:any) => {
    const move = step? 'X' : 'O'
    setValue(values.map((square,id) => {
      return id == value? move : values[id]
    }))
    setStep(!step)
};
winLine(values, step)
  return (
    <div className="App">
      {values.map((value,id) => {
        return <Square key={id} value={value} values={values} onClick={onClick} id={id}/>
      }) }
      <Restart setValue={setValue} values={values}/>
    </div>
  )
}

export default App


const winLine = (array: any, step: boolean) => {
  const a = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let i = 0; i < a.length; i++){
    if(array[a[i][0]] === array[a[i][1]] && array[a[i][1]] === array[a[i][2]] && array[a[i][0]]){
      if(step) alert('O wins')
      else alert('X wins')
      return true
    }
  }
}