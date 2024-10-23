import React from 'react'

const Todo = (props) => {
  return (
    <div className='d-flex flex-wrap'>
      <div className="card w-50">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.dicp}</p>
    <button className="btn btn-primary" onClick={()=>{props.onDeleat(props.todo)}}>Delete</button>
  </div>
</div>
    </div>
  )
}

export default Todo
