import React from 'react';
import './Button.css';

const Button =({onClicking})=>{
    return(
        <div className="form-submit-button">
            <button style={{background: '#45a049'}} className="pointer"  onClick={onClicking}>Analyse</button>
        </div>
        
    )
}

export default Button;