"use client"
import TodoList from "@/components/TodoList";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [formData,setFormData]=useState({
    Title:"",
    Discription:"",
  });

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
      

      toast.success("success")
    } catch (error) {
      toast.error("Error")
      
    }

  }

  return (
    <>
      <ToastContainer theme="dark"/>
      <form onSubmit={onSubmitHandler} className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input value={formData.Title} onChange={onChangeHandler} type="text" name="Title" placeholder="Enter the Title" className="px-3 py-2 border-2 w-full" />
        <textarea value={formData.Discription} onChange={onChangeHandler} name="Discription" placeholder="Enter the Discription" className="px-3 py-2 border-2 w-full"></textarea>
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

            <TodoList/>
            <TodoList/>
            <TodoList/>

          </tbody>
        </table>
      </div>



    </>
  );
}
