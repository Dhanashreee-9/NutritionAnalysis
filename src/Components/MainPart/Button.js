import React from 'react';
import './Button.css';

const Button =({oninput,onClicking,clickBut})=>{
    return(
        
        <div className="input-form">
        <div className="text">
            <h4>Nutrition Analysis</h4>
            <p>Enter an ingredient list for what you are cooking,
            like<span>"1 cup rice, 10 oz chickpeas",</span>etc.  Enter each ingredient on a new line.</p>
        </div>
        <div className="input-field">
        <textarea onChange={oninput}></textarea>
        </div>
        <div className="btn">
            <button onClick={onClicking}>Analyze</button>
            {clickBut ?
                <button type="reset" onClick={() => window.location.reload(false)}>New Recipe</button>:
                ''}
            
        </div>
        
         
        </div>
        
    )
}

export default Button;