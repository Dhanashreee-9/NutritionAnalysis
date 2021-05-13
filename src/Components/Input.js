import React from 'react';
import './Input.css';

const Input =({oninput,onClicking,clickBut})=>{
    return(
        <div className="col-75">
            {/* <input className="ml4" style={{width:'50%',height:'200px'}} type="text" placeholder="Enter Here"/> */}
            <textarea id="subject" placeholder="Write here.." onChange={oninput} style={{width:'50%',height:'350px'}}></textarea>
        </div>
        
    )
}

export default Input;