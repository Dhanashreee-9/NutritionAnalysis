import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
//import Output from './Components/Output';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      clickBut: false,
       input:'',
       ingredient:'',
       data:{},
    }
  }

  onInputting=(event)=>{
    this.setState({input : event.target.value })
    console.log("input");
  }
  onClicking=()=>{
      this.setState({ingredient : this.state.input})
  }
  fetchUsersWithFetchAPI = () => {
    fetch(`https://api.edamam.com/api/nutrition-data?app_id=5e03798e&app_key=
    47e7a3a472f84f4da6374caaa5ad0c3c&ingr=${this.state.ingredient}`)
        .then(response => response.json())
        .then(data => {
            this.setState({data: data, clickBut: true})
               console.log(data)
          })
      
};

  
  render(){
    return(
      <div>
        <div className="text-block">
           <div>
           <h1 style={{display:'flex', justifyContent:'center'}}>Nutrition Analysis API Demo</h1>
           <p style={{display:'flex', justifyContent:'center'}}>Enter an ingredient list list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.
               Enter each ingredient on a new line.</p>
           </div>
           <Input oninput ={this.onInputting}  clickBut={this.state.clickBut}/>
           <Button onClicking={this.onClicking}/>
           {/* <Output data={this.state.data}/>  */}
         </div>
         
      </div>
    )
  }
}

export default App;
