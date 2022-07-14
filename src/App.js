
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

    const clickD4 =(e)=>{
    e.preventDefault()
    
    const D4 = playD4()
    alert(`클릭되는 음 : ${D4}`)
  }

  const clickEb4 =(e)=>{
    e.preventDefault()
    
    const Eb4 = playEb4()
    alert(`클릭되는 음 : ${Eb4}`)
  }

  const clickE4 =(e)=>{
    e.preventDefault()
    
    const E4 = playE4()
    alert(`클릭되는 음 : ${E4}`)
  }

  const clickF4 =(e)=>{
    e.preventDefault()
    
    const F4 = playF4()
    alert(`클릭되는 음 : ${F4}`)
  }

  const clickGb4 =(e)=>{
    e.preventDefault()
    
    const Gb4 = playGb4()
    alert(`클릭되는 음 : ${Gb4}`)
  }

  const clickG4 =(e)=>{
    e.preventDefault()
    
    const G4 = playG4()
    alert(`클릭되는 음 : ${G4}`)
  }

  const clickAb4 =(e)=>{
    e.preventDefault()
    
    const Ab4 = playAb4()
    alert(`클릭되는 음 : ${Ab4}`)
  }

  const clickA4 =(e)=>{
    e.preventDefault()
    
    const A4 = playA4()
    alert(`클릭되는 음 : ${A4}`)
  }

  const clickBb4 =(e)=>{
    e.preventDefault()
    
    const Bb4 = playBb4()
    alert(`클릭되는 음 : ${Bb4}`)
  }

  const clickB4 =(e)=>{
    e.preventDefault()
    
    const B4 = playB4()
    alert(`클릭되는 음 : ${B4}`)
  }

  const clickC5 =(e)=>{
    e.preventDefault()
    
    const C5 = playC5()
    alert(`클릭되는 음 : ${C5}`)
  }

  const clickDb5 =(e)=>{
    e.preventDefault()
    
    const Db5 = playDb5()
    alert(`클릭되는 음 : ${Db5}`)
  }

  const clickD5 =(e)=>{
    e.preventDefault()
    
    const D5 = playD5()
    alert(`클릭되는 음 : ${D5}`)
  }

  const clickEb5 =(e)=>{
    e.preventDefault()
    
    const Eb5 = playEb5()
    alert(`클릭되는 음 : ${Eb5}`)
  }

  const clickE5 =(e)=>{
    e.preventDefault()
    
    const E5 = playE5()
    alert(`클릭되는 음 : ${E5}`)
  }

  const clickF5 =(e)=>{
    e.preventDefault()
    
    const F5 = playF5()
    alert(`클릭되는 음 : ${F5}`)
  }

  const clickGb5 =(e)=>{
    e.preventDefault()
    
    const Gb5 = playGb5()
    alert(`클릭되는 음 : ${Gb5}`)
  }

  const clickG5 =(e)=>{
    e.preventDefault()
    
    const G5= playG5()
    alert(`클릭되는 음 : ${G5}`)
  }

  const clickAb5 =(e)=>{
    e.preventDefault()
    
    const Ab5 = playAb5()
    alert(`클릭되는 음 : ${Ab5}`)
  }

  const clickA5 =(e)=>{
    e.preventDefault()
    
    const A5 = playA5()
    alert(`클릭되는 음 : ${A5}`)
  }

  const clickBb5 =(e)=>{
    e.preventDefault()
    
    const Bb5 = playBb5()
    alert(`클릭되는 음 : ${Bb5}`)
  }

  const clickB5 =(e)=>{
    e.preventDefault()
    
    const B5 = playB5()
    alert(`클릭되는 음 : ${B5}`)
  }

  const clickC6 =(e)=>{
    e.preventDefault()
    
    const C6 = playC6()
    alert(`클릭되는 음 : ${C6}`)
  }
    return(<div className='pianoPage'>
    <h1>Enjoy playing on the Tone Piano!</h1> <br/> <br/> <br/> <br/>
    <div className='piano'>
    <div className='white-key' onClick={clickC4}>A</div>
    <div className='black-key' onClick={clickDb4}>W</div>
    <div className='white-key' onClick={clickD4}>S</div>
    <div className='black-key' onClick={clickEb4}>E</div>
    <div className='white-key' onClick={clickE4}>D</div>
    <div className='white-key' onClick={clickF4}>F</div>
    <div className='black-key' onClick={clickGb4}>T</div>
    <div className='white-key' onClick={clickG4}>G</div>
    <div className='black-key' onClick={clickAb4}>Y</div>
    <div className='white-key' onClick={clickA4}>H</div>
    <div className='black-key' onClick={clickBb4}>U</div>
    <div className='white-key' onClick={clickB4}>J</div>

    <div className='white-key' onClick={clickC5}>K</div>
    <div className='black-key' onClick={clickDb5}>O</div>
    <div className='white-key' onClick={clickD5}>L</div>
    <div className='black-key' onClick={clickEb5}>P</div>
    <div className='white-key' onClick={clickE5}>Z</div>
    <div className='white-key' onClick={clickF5}>X</div>
    <div className='black-key' onClick={clickGb5}>C</div>
    <div className='white-key' onClick={clickG5}>V</div>
    <div className='black-key' onClick={clickAb5}>B</div>
    <div className='white-key' onClick={clickA5}>N</div>
    <div className='black-key' onClick={clickBb5}>M</div>
    <div className='white-key' onClick={clickB5}>R</div>
    <div className='white-key' onClick={clickC6}>I</div>
  
    </div>
    </div>)
}

export default App;


