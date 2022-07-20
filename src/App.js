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


  

  const clickC4 =(e)=>{
      e.preventDefault()
      
      playC4()
      
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
  const clickEnd =(e)=>{
    e.preventDefault()
    
    localStorage.setItem('note', null)
  }
    return(<div className='pianoPage'>
    <img src="https://ifh.cc/g/KtohFH.png" style={{width:110+"px"}}/>
    
    <h1>Enjoy playing on the Tone Piano!</h1> <br/> <br/> <br/> <br/>
    <button>녹음시작</button> <br/><br/> <button onClick={clickEnd}>녹음 끝</button><br/><br/>
    <div className='piano'>
    <div className='white-key' name= 'note1' onClick={clickC4}>A</div>
    <div className='black-key' name= 'note2' onClick={clickDb4}>W</div>
    <div className='white-key' name= 'nonte3' onClick={clickD4}>S</div>
    <div className='black-key' name= 'nonte4' onClick={clickEb4}>E</div>
    <div className='white-key' name= 'nonte5' onClick={clickE4}>D</div>
    <div className='white-key' name= 'nonte6' onClick={clickF4}>F</div>
    <div className='black-key' name= 'nonte7' onClick={clickGb4}>T</div>
    <div className='white-key' name= 'nonte8' onClick={clickG4}>G</div>
    <div className='black-key' name= 'nonte9' onClick={clickAb4}>Y</div>
    <div className='white-key' name= 'note10' onClick={clickA4}>H</div>
    <div className='black-key' name= 'note11' onClick={clickBb4}>U</div>
    <div className='white-key' name= 'note12' onClick={clickB4}>J</div>

    <div className='white-key' name= 'note13' onClick={clickC5}>K</div>
    <div className='black-key' name= 'note14' onClick={clickDb5}>O</div>
    <div className='white-key' name= 'note15' onClick={clickD5}>L</div>
    <div className='black-key' name= 'note16' onClick={clickEb5}>P</div>
    <div className='white-key' name= 'note17' onClick={clickE5}>Z</div>
    <div className='white-key' name= 'note18' onClick={clickF5}>X</div>
    <div className='black-key' name= 'note19' onClick={clickGb5}>C</div>
    <div className='white-key' name= 'note20' onClick={clickG5}>V</div>
    <div className='black-key' name= 'note21' onClick={clickAb5}>B</div>
    <div className='white-key' name= 'note22' onClick={clickA5}>N</div>
    <div className='black-key' name= 'note23' onClick={clickBb5}>M</div>
    <div className='white-key' name= 'note24' onClick={clickB5}>R</div>
    <div className='white-key' name= 'note25' onClick={clickC6}>I</div>
    
    </div>
    
    </div>

    )
}

export default App;