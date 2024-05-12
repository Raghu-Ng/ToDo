import React from 'react'

const TodoList = ({id, title, discription, mongoId, complete, deleteTodo , updateTodo}) => {
  return (
    <tr>
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
    {id+1}
  </th>
  <td className={`px-6 py-4 ${complete?"line-through":""}`}>
    {title}
  </td>
  <td className={`px-6 py-4 ${complete?"line-through":""}`}>
  {discription}
  </td>
  <td className="px-6 py-4">
    {complete? "completed":"pending"}
  </td>
  <td className="px-6 py-4 flex gap-1">
   <button onClick={()=> deleteTodo(mongoId)} className='br-5 py-2 px-4 bg-red-500 text-white rounded'>Delete</button>
   {complete?"":<button onClick={()=> updateTodo(mongoId)} className='py-2 px-4 bg-green-500 text-white rounded'>Done</button>}
  </td>
  </tr>
  )
}

export default TodoList