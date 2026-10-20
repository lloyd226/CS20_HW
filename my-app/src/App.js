import { useState } from 'react';
import './App.css';

function Block(value, color) {
  this.value = value;
  this.color = color;
}


function Blocks(props) {
 return( <div class="box"
      onClick={() => alert(props.children)} 
      style={{ backgroundColor: props.bgcolor }}> 
      {props.children} </div> )

}

function ColorGrid(props) {
  return ( 
      <div class="grid"> 
          {props.colorArray.map((b) => {
              return (<Blocks bgcolor={b.color}>
                  {b.value}
              </Blocks>)
          })}
      </div>
  )

}


var MyColors = [];

for(let i=1; i < 10; i++){
  MyColors.push(new Block(i,"#" + ((i % 2)* 4) + "E7E" + i +"E"));
}

function App() {
  return <ColorGrid colorArray={MyColors}/> ;
}

export default App;
