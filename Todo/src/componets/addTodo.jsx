import React, { useState } from 'react'

const AddTodo = ({AddTodof}) => {
    const [title,setTitle] = useState('');
    const [dicp,setdicp] = useState('');


    const Sumbit =(e)=>{
        e.preventDefault();
        console.log("todo add succsefuly", title , dicp);
        if(!title || !dicp){
            alert("fill the all value");
        }

        AddTodof(title,dicp);
        setTitle("");
        setdicp("");

    }

  return (
    <div>
      <form onSubmit={Sumbit}>
        <h2>Add Todo</h2>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input 
    type="text" 
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Discription</label>
    <input 
    type="text" 
    value={dicp}
    onChange={(e)=>{setdicp(e.target.value)}}
    className="form-control" 
    id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddTodo;
