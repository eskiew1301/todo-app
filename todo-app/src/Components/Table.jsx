import React from 'react'



const Table = (props) => {
    const { todo, handleDeleteTodo,index, handleCompleteTodo } = props;
    const TableHeader=()=>(
        <thead>
            <tr>
                <th>Todo</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
    const TableRow =()=>{
        
    }
  return (
    <div>Table</div>
  )
}

export default Table