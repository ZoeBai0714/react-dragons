import React, { Component } from 'react'
import Dragon from './Dragon'

class War extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
            <div style={{float:'right', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                <h1>War</h1>
               {this.props.atWar.map(dragon => <Dragon {...dragon} changeAtWar = {this.props.changeAtWar}/>)}
            </div>
        )
    }

}

export default War