import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div >
        <h1>Todo list</h1>
        {props.todo =="" ?<h3 className='color-green'>congrasulation day is complied </h3>:props.todo.map((todo)=>{
            return ( <Todo title ={todo.title} key={todo.sno} dicp={todo.dicp} onDeleat={()=>{props.onDeleat(todo)}}/>);
        })}
        
    </div>
  )
}

export default Todos