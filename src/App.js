import './App.scss';
import { useState, useEffect } from 'react';

function App() {


// TODOn't induce seizures
// const [rotationState, setRotation] = useState(false);
// useEffect(() => {
//   setRotation(!rotationState)
// }, [rotationState])

 const colors = [
    "red",
    "white",
    "blue",
    "yellow"
  ];
 const dividers = [
    "horizontalDivider",
    "verticalDivider"
  ];
  const getRandomInt = (max)=> {
    return parseInt(Math.floor(Math.random() * Math.floor(max)));
  }
  const squares = [];
  const generateSquares= ()=>{
    for(let i = 0; i<60; i++){
      squares.push(
        <div onClick={(e)=>{
          e.target.className = `funkySquare ${colors[getRandomInt(4)]} ${(getRandomInt(2) === 0)? "rotate" : console.log("rotation fail")}`;
        }} className={`funkySquare ${colors[getRandomInt(4)]}`} key={i}>
          {/* randomizes original layout on render aka every refresh looks different */}
          <div className={`${dividers[getRandomInt(2)]}`}></div>
        </div>
        
      )
    }
  }
  generateSquares();
  return (
    <div className="app">
      <main className="container">
        {squares}          
      </main>
  </div>
  )}
export default App;