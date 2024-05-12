import React from 'react'

const TodoList = () => {
  return (
    <tr>
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
    1
  </th>
  <td className="px-6 py-4">
    Project
  </td>
  <td className="px-6 py-4">
  Complete this Next.js Project
  </td>
  <td className="px-6 py-4">
    Pending
  </td>
  <td className="px-6 py-4 flex gap-1">
   <button className='br-5 py-2 px-4 bg-red-500 text-white rounded'>Delete</button>
   <button className='py-2 px-4 bg-green-500 text-white rounded'>Done</button>
  </td>
  </tr>
  )
}

export default TodoList