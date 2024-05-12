"use client"
import TodoList from "@/components/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [formData,setFormData]=useState({
    title:"",
    discription:"",
  });

  const [todoData, setTodoData]=useState([]);

  const fetchTodos = async () => {
    const response = await axios('/api');
    setTodoData(response.data.todos)
  }

  const deleteTodo = async (id) => {
    const response = await axios.delete('/api',{
      params:{
        mongoId:id
      }
    })
    toast.success(response.data.msg);
    fetchTodos();
  }

  const updateTodo = async (id) => {
    const response = await axios.put('/api',{},{
      params:{
        mongoId:id
      }
    })
    toast.success(response.data.msg);
    await fetchTodos();
  }

  useEffect(()=>{
    fetchTodos();
  },[])

  const onChangeHandler=(e)=> {
    const name = e.target.name;
    const value=e.target.value;
    setFormData(form=>({...form,[name]:value}));
    console.log(formData);
  }

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    try {
      // api code
      const response = await axios.post('/api',formData);
      toast.success(response.data.msg);
      setFormData({
        title:"",
        discription:"",
      });
      await fetchTodos();
    } catch (error) {
      toast.error("Error")
      
    }

  }

  return (
    <>
      <ToastContainer theme="dark"/>
      <form onSubmit={onSubmitHandler} className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter the Title" className="px-3 py-2 border-2 w-full" />
        <textarea value={formData.discription} onChange={onChangeHandler} name="discription" placeholder="Enter the Discription" className="px-3 py-2 border-2 w-full"></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add Todo</button>
      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Tittle
              </th>
              <th scope="col" className="px-6 py-3">
                Discription
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

          {todoData.map((item,index)=>{
            return <TodoList key={index} id={index} title={item.title} discription={item.discription} complete={item.isCompleted} mongoId={item._id} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          })}

          </tbody>
        </table>
      </div>



    </>
  );
}
