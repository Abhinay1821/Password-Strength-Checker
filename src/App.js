import React from 'react'
import './App.css';
import {password} from './Config'

function App() {
  const [input,setInput] = React.useState('')
  const [text,setText]  = React.useState('No Password')

  const passwordScore = () => {
    const hasLowerCase = /[a-z]/;
    const hasUpperCase = /[A-Z]/;
    const hasDigit = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    const lengthScore = Math.min(input.length,1)
    let complexityScore = 0;
    if(hasLowerCase.test(input)) complexityScore++;
    if(hasUpperCase.test(input)) complexityScore++;
    if(hasDigit.test(input)) complexityScore++;
    if(hasSpecialChar.test(input)) complexityScore++;

    return lengthScore + complexityScore

  } 
  React.useEffect(()=>{
    const passScore = passwordScore()
    const filteredTextObj = password.find(pass => {
      if(passScore >= pass.min && passScore < pass.max) return pass
    })
    setText(filteredTextObj.text)
  },[input])


  return (
    <div className="App">
      <h1>PassWord Strength Checker</h1>
      <input type="password" onChange={(e)=>setInput(e.target.value)} value={input}/>
      <h2>{text}</h2>
    </div>
  );
}

export default App;
