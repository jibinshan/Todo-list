import React,{useState} from 'react' 
import { FaTrashAlt,FaPen } from "react-icons/fa";
import Update from '../updatess/Update'
import './todooutput.css'

const Maparray =({list,handledelete,handletoggleclose,saveinput,listvalue,update,setUpdate})=>{
  const [toggle,setToggle] = useState(false)
  const handletoggle = (list)=>{
      setToggle((prev)=>
        !prev
         
      )
  }
 
  return(
    <div>

<div className='Todooutput-container'>
  <div className='todolist'>
  <h2>{list.text}</h2>
 </div> 
  <div className="icons-container">
  <FaPen onClick={()=>handletoggle(list.text)}/>
  <FaTrashAlt onClick={()=>{
    handledelete(list)
  }}/>
  
  </div>
  
  </div>
      {toggle && <Update handletoggleclose={()=>setToggle((prev)=>!prev)}
       saveinput={()=>saveinput(list)}
       listvalue={()=>{listvalue(list.id)}} 
       setUpdate={setUpdate} 
       update={update}/> }
  </div>
   ) 
 
}


function Todooutput({todos,setTodos,todo,setTodo}) {
  const [current,setCurrent] = useState('')
  const [update,setUpdate] = useState('')
  
  
  const listvalue = (list)=>{
    setUpdate(list)
  }
  const saveinput = (list)=>{
    setTodos(todos.filter((item)=>{
      if (item.id === list.id) {
        item.text = update
      }
      return item
    }))
  }
//   const handletoggleopen = (list,text)=>{
//      setCurrent(current === list ? '':list)
//      listvalue(text)
//  } 
 const handletoggleclose =(list)=>{
  setCurrent(current === list ? '':'')
 }
   const handledelete =(list)=>{
       
      setTodos(todos.filter((item)=>item.id !== list.id))
   }
  return (
     <div>
    {todos.map((list)=>{
       return(
        <Maparray
        list={list}
        handledelete={handledelete}
        handletoggleclose={handletoggleclose}
        saveinput={saveinput}
        listvalue={listvalue}
        update={update}
        setUpdate={setUpdate}
        key={list.id}
        />
       )
          })}
        </div>
    )
}
export default Todooutput
