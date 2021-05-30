import './App.css';
import Button from './Components/MainPart/Button';
import Output from './Components/Output/Output';
import ErrorMessage from './Components/Error/ErrorMessage';
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
onClicking=async()=>{
      await this.setState({ingredient : this.state.input})
      await this.fetchUsersWithFetchAPI();
  }
  fetchUsersWithFetchAPI = () => {
    fetch(`https://api.edamam.com/api/nutrition-data?app_id=7dbb41f5&app_key=
           9d8501ca996ff6c6c5da60a19cda6a7f&ingr=${this.state.ingredient}`)
        .then(response => response.json())
        .then((data)=> {
            this.setState({data: data, clickBut: true});
               console.log(data);
          })
      
};

  
  render(){
    return(
      <div className="container">
        <div className="text-block"> 
        <div className="output"> 
           <Button onClicking={this.onClicking}oninput ={this.onInputting}  clickBut={this.state.clickBut}/>
           {(this.state.clickBut && this.state.ingredient !== '') ?
            <Output data={this.state.data}/> 
          :((this.state.clickBut && this.state.ingredient === '')?<ErrorMessage/>: '')}
        </div>
         </div>
         
      </div>
    )
  }
}

export default App;
