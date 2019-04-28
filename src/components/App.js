import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {
  state = {
    dragons:[],
    filtered:[]
  }

  //fetch data
  componentDidMount(){
    fetch('http://localhost:3001/dragons')
    .then(res => res.json())
    .then(dragonsData => {
      console.log(dragonsData)
      this.setState({
        dragons:dragonsData
      })
    })
  }
    
  changeAtWar = (id) =>{
    //update browser
    this.setState({
      dragons:this.state.dragons.map(dragon => {
        if(dragon.id == id){
          //update db
              fetch(`http://localhost:3001/dragons/${id}`, { //pay attention to id here
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                          },
                body:JSON.stringify({
                                atWar: !dragon.atWar
                                    })
              })
          return {...dragon, atWar:!dragon.atWar}
        }else{
          return dragon
        }
      })
    })

  } 

  searchByName = (value) =>{
    this.setState({
      filtered:this.state.dragons.filter(dragon => dragon.name == value)
    })
  }

  render() {
   
    return (
      <div>
        {this.state.filtered.length > 0?
          <Home atHome ={this.state.filtered} changeAtWar = {this.changeAtWar} searchByName = {this.searchByName}/>
          :
          <Home atHome ={this.state.dragons.filter(dragon => dragon.atWar == false)} changeAtWar = {this.changeAtWar} searchByName = {this.searchByName}/>
         }
         <War atWar = {this.state.dragons.filter(dragon => dragon.atWar == true)} changeAtWar = {this.changeAtWar}/>
      </div>
    );
  }
}
 
export default App;
