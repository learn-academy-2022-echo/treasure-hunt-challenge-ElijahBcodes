import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  
const [board, setBoard]= useState(["💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"])    
  
const handleGamePlay = (index) => {
        alert(index)    
 } 
 const treasure =(index) => {
  var winner = Math.floor(Math.random() * 8)
  var loser = Math.floor(Math.random()*8)
  if ( winner === loser){
    loser = Math.floor(Math.random());
  }else if (index === winner){

  }
 }
  
    return(
      <>
        <h1 id="top">Treasure Hunt Game</h1>
        <div className= "boardgame">
            {board.map((value, index) => {
              return(
                <Square value ={value} index={index} handleGamePlay={handleGamePlay}/>
              )
          })}
          </div>
      </>
    )
  }

export default App
