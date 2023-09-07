import React from 'react'
import './update.css'
function Update({handletoggleclose,saveinput,listvalue,setUpdate,update}) {
  
  return (
    <div className='Update-container'>
        <input  value={update} type="text" placeholder='Editing Current Todo Item' onChange={(e)=>setUpdate(e.target.value)}/>
        <button className='savebutton' onClick={saveinput}>SAVE</button>
        <button className='cancelbutton' onClick={handletoggleclose}>CANCEL</button>            
    </div>
  )
}

export default Update
