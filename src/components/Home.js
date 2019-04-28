import React, { Component } from 'react'
import Dragon from './Dragon'

class Home extends Component{
    //persist db
    handleSubmit = (e) =>{
       e.preventDefault()
       this.props.searchByName(e.target.children[2].value) //pay attention to how we grab value here
    }
 
    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
        <div style={{textAlign:'center',float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <h1>Home</h1>
            <form onSubmit = {(e)=>this.handleSubmit(e)}>
            <label>Search by name</label><br/>
            <input type = "text"/><br/>
            <button>Submit</button> 
            </form>
           {this.props.atHome.map(dragon => <Dragon {...dragon} changeAtWar = {this.props.changeAtWar}/>)}
        </div>
        )
    }

}

export default Home