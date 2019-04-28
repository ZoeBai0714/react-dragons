import React, { Component } from 'react';

const Dragon = ({name, description,atWar, id, image, changeAtWar}) =>(
            <div style = {{textAlign:'center'}}>
                <p>Name: {name}</p>
                <p>{description}</p>
                <img style = {{border:'solid', borderRadius:'25px',width:'300px', height:'200px'}} src = {image}/><br/>
                <button onClick = {()=> changeAtWar(id)}>{atWar? 'Send Home':'Send to War'}</button>
            </div>
    
)

export default Dragon

