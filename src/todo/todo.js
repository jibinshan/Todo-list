import React,{useState} from 'react'
import './todo.css'
import Todoinput from './todoinput/todoinput'
import Todooutput from './todooutput/Todooutput'


function Todo() {
    
    const [todo,setTodo] = useState('')
    const [todos,setTodos] = useState([])
   
    const todolist = (e)=>{
        setTodo(e.target.value)
    }
    const addtodo = ()=>{
      setTodos([...todos,{id:Date.now(),text:todo,status:false,}])
      console.log(todos);
      setTodo('')
    }
  return (
    <div className='Todo-container'>
         <h1>Todo List</h1>
          <Todoinput todolist={todolist}  todo={todo} addtodo={addtodo}/>  
          <Todooutput  todo={todo} todos={todos} setTodos={setTodos}  setTodo={setTodo}  />
          
          
    </div>
  )
}

export default Todo
