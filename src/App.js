
import './App.css';
import React, {useState} from 'react';
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playDb5,
  playD5,
  playEb5,
  playE5,
  playF5,
  playGb5,
  playG5,
  playAb5,
  playA5,
  playBb5,
  playB5,
  playC6,
  PlayNote
} from "./tone.fn.js"


window.addEventListener("keydown",PlayNote);
function App(){
  const [inputs, setInputs] =useState({})
  const{username, password} = inputs;

  const handleChange = (e) =>{
      e.preventDefault()
      const{value, name} = e.target;
      setInputs({...inputs,[name]: value})
  }

  const clickC4 =(e)=>{
      e.preventDefault()
      
      const C4 = playC4()
      alert(`클릭되는 음 : ${C4}`)
  }

  const clickDb4 =(e)=>{
    e.preventDefault()
    
    const Db4 = playDb4()
    alert(`클릭되는 음 : ${Db4}`)
}
    return(<div className='pianoPage'>
    <h1>Enjoy playing on the Tone Piano!</h1> <br/> <br/> <br/> <br/>
    <div className='piano'>
    <div className='white-key' onClick={clickC4}>A</div>
    <div className='black-key' onClick={clickDb4}>W</div>
    <div className='white-key' onClick={playD4}>S</div>
    <div className='black-key' onClick={playEb4}>E</div>
    <div className='white-key' onClick={playE4}>D</div>
    <div className='white-key' onClick={playF4}>F</div>
    <div className='black-key' onClick={playGb4}>T</div>
    <div className='white-key' onClick={playG4}>G</div>
    <div className='black-key' onClick={playAb4}>Y</div>
    <div className='white-key' onClick={playA4}>H</div>
    <div className='black-key' onClick={playBb4}>U</div>
    <div className='white-key' onClick={playB4}>J</div>
    <div className='white-key' onClick={playC5}>K</div>
    <div className='black-key' onClick={playDb5}>O</div>
    <div className='white-key' onClick={playD5}>L</div>
    <div className='black-key' onClick={playEb5}>P</div>
    <div className='white-key' onClick={playE5}>Z</div>
    <div className='white-key' onClick={playF5}>X</div>
    <div className='black-key' onClick={playGb5}>C</div>
    <div className='white-key' onClick={playG5}>V</div>
    <div className='black-key' onClick={playAb5}>B</div>
    <div className='white-key' onClick={playA5}>N</div>
    <div className='black-key' onClick={playBb5}>M</div>
    <div className='white-key' onClick={playB5}>R</div>
    <div className='white-key' onClick={playC6}>I</div>
  
    </div>
    </div>)
}

export default App;


