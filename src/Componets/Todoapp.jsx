import React, { use } from 'react'
import { useState } from 'react'

function Todoapp() {
    const[todo,setTodo]=useState([]);
    const[input,SetInput]=useState([]);
    const[date,SetDate]=useState([]);
    
    const add=()=>{
        if(input.trim()&&date){
            setTodo([...todo,[input,date]]);
            SetInput('');
            SetDate('');
        }
    };
  return (
   <>
   <div id="maincontainer">
        <div id="secondary">
            <h1>My To-Do List</h1>
            <input id="mes" type='text'
            value={input}
            onChange={(e)=>SetInput(e.target.value)} placeholder='Enter To-Do List'/>
            <h2>Target Date</h2>
            <input id='date' type="date" 
            value={date}onChange={(e)=>SetDate(e.target.value)} />
            <button onClick={add}>Add ToDo</button>
        </div>
        <table id="table" style={{border:"1px solid black",height:"3rem",width:"85%"}}>
            <thead id="head">
                <td >Number</td>
                <td >My ToDo Lists</td>
                <td >Target Date</td>
                
            </thead>
            <tbody>
              {todo.map((item,index) => (
                <tr key={index}>
                  <td style={{border:"1px solid black"}} >{index + 1}</td>
                  <td style={{border:"1px solid black"}}>{item[0]}</td>
                  <td style={{border:"1px solid black"}}>{item[1]}</td>
                </tr>
              ))}
            </tbody>         
        </table>

   </div>
   </>
  )
}

export default Todoapp