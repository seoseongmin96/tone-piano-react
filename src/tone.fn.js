import * as Tone from "tone"

export function playC4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4","8n");
   return keycode
    }

export function playDb4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Db4","8n");
    return keycode
    }
    
export function playD4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4","8n");
    return keycode
    }   
    
export function playEb4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Eb4","8n");
    return keycode
    }   

export function playE4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4","8n");
    return keycode
    }
    
export function playF4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4","8n");
    return keycode
    }
        
export function playGb4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Gb4","8n");
    return keycode
    }
    
export function playG4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G4","8n");
    return keycode
   } 
    
export function playAb4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Ab4","8n");
    return keycode
    }
    
export function playA4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4","8n");
    return keycode
    }

export function playBb4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Bb4","8n");
    return keycode
    }
        
export function playB4(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B4","8n");
    return keycode
    }

export function playC5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C5","8n");
    return keycode
    }
    
export function playDb5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Db5","8n");
    return keycode
    }
    
export function playD5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D5","8n");
    return keycode
    }
        
export function playEb5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Eb5","8n");
    return keycode
    }

export function playE5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E5","8n");
    return keycode
    }

export function playF5(keycode){
     const synth = new Tone.Synth().toDestination();
     synth.triggerAttackRelease("F5","8n");
     return keycode
    }

export function playGb5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Gb5","8n");
    return keycode
    }

export function playG5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G5","8n");
    return keycode
    }

export function playAb5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Ab5","8n");
    return keycode
    }

export function playA5(keycode){
    const synth = new Tone.Synth().toDestination();
     synth.triggerAttackRelease("A5","8n");
     return keycode
    }

export function playBb5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Bb5","8n");
    return keycode
    }

export function playB5(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B5","8n");
    return keycode
    }

export function playC6(keycode){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C6","8n");
    return keycode
    }

export function PlayNote(event){
    if(event.keyCode ===65){
        alert('C4')
        playC4("A");

    }
    if(event.keyCode ===87){
        alert('Db4')
        playDb4("W");
    }
    if(event.keyCode ===83){
        alert('D4')
        playD4("S");
    }
    if(event.keyCode ===69){
        alert('Eb4')
        playEb4("E");
    }
    if(event.keyCode ===68){
        alert('E4')
        playE4("D");
    }
    if(event.keyCode ===70){
        alert('F4')
        playF4("F");
    }
    if(event.keyCode ===84){
        alert('Gb4')
        playGb4("T");
    }
    if(event.keyCode ===71){
        alert('G4')
        playG4("G");
    }
    if(event.keyCode ===89){
        alert('Ab4')
        playAb4("Y");
    }
    if(event.keyCode ===72){
        alert('A4')
        playA4("H");
    }
    if(event.keyCode ===85){
        alert('Bb4')
        playBb4("U");
    }
    if(event.keyCode ===74){
        alert('B4')
        playB4("J");
    }


    if(event.keyCode ===75){
        alert('C5')
        playC5("K");
    }
    if(event.keyCode ===79){
        alert('Db5')
        playDb5("O");
    }
    if(event.keyCode ===76){
        alert('D5')
        playD5("L");
    }
    if(event.keyCode ===80){
        alert('Eb5')
        playEb5("P");
    }
    if(event.keyCode ===90){
        alert('E5')
        playE5("Z");
    }
    if(event.keyCode ===88){
        alert('F5')
        playF5("X");
    }
    if(event.keyCode ===67){
        alert('Gb5')
        playGb5("C");
    }
    if(event.keyCode ===86){
        alert('G5')
        playG5("V");
    }
    if(event.keyCode ===66){
        alert('Ab5')
        playAb5("B");
    }
    if(event.keyCode ===78){
        alert('A5')
        playA5("N");
    }
    if(event.keyCode ===77){
        alert('Bb5')
        playBb5("M");
    }
    if(event.keyCode ===82){
        alert('B5')
        playB5("R");
    }
    if(event.keyCode ===73){
        alert('C6')
        playC6("I");
    }

    


}    