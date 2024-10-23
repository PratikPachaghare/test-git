import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './componets/Headers'
import Todo from './componets/Todo'
import Footer from './componets/Footer'
import Todos from './componets/Todos'
import AddTodo from './componets/addTodo'


function App() {
  let initarra;
  if(localStorage.getItem("todos")===null){
    initarra=[];
  }
  else{
    initarra = JSON.parse(localStorage.getItem("todos"));
  }

  const onDeleat = (todo)=>{
    console.log("todo is dealeted",todo);
    setTodo(todos.filter((e)=>{
      return  e!==todo;
    }))
  }

  const AddTodof = (titlep, dicpp)=>{
     let key = [todos.length-1].sno+1;
     let tod = {
      sno : key,
        title: titlep,
        dicp : dicpp
     }
    setTodo([...todos,tod]);
  }

  let [todos ,setTodo] =  useState(initarra);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
     <Headers/>
     <AddTodo AddTodof={AddTodof}/>
     <Todos todo = {todos} onDeleat={onDeleat} />
     <Footer/>
     </>
  )
}

export default App
