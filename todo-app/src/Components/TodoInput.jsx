import React, { useState } from 'react'
import {FaPlus} from 'react-icons/fa'
const TodoInput = (props) => {
  const {handleAddTodo}=props
  const [inputValue, setInputValue] = useState('')
 
  return (
    <div className='input-container'>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='Add task' />
      <button onClick={()=>{
        if(!inputValue) return
        handleAddTodo(inputValue)
        setInputValue("")
      }}>
        <FaPlus className='fa-solid fa-plus' />
      </button>
    </div>
  )
}

export default TodoInput