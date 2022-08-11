import { addDoc, collection, getDocs ,doc,deleteDoc} from 'firebase/firestore';
import './App.css';
import { db } from './firebase--config';
import { useState,useEffect } from 'react';
import { async } from '@firebase/util';
import Delete from './de.png'
// import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [TodosValue, setTodosValue] = useState([])
  const [Work, setWork] = useState([])
  const [Title, setTitle] = useState([])
  const [Time, setTime] = useState([])
  const usersCollectionRef = collection(db, "Todos");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data)
      setTodosValue(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
 
  const createTitle=async()=>{
   await addDoc(usersCollectionRef,{Title:Title,Time:Time,Work:Work})
    
  }
  
  const deleteTodo=async(id)=>{
    const TodoDoc=doc(db,"todos",id)
    await deleteDoc(TodoDoc)

  }
  

  return (
    <div className=" rounded-lg m-12 mt-10 text-center shadow-xl bg-[#ADD8E6]  ">
      <h2 className='bg-cyan-600 pt-4 pb-4   items-center    text-5xl font-sans '>TodoApp</h2>
      <div className='text-white shadow-lg h-32 bg-white p-4 font-mono text-3xl '>
        
<form>   
  h1
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required=""/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

<h1 className='ml-72 mr-32 text-5xl font-serif bg-slate-500 rounded-lg shadow-lg w-1/2 text-black align-middle mt-12'>Your Todos</h1>
<div className='text-white shadow-lg gap-20 rounded-lg h-screen  bg-cyan-600 mt-24'>
<input className='bg-trasnparent uppercase outline-none shadow-sm focus:outline-none border-b-4 rounded-lg  hover:border-slate-900 p-4 focus:cursor text-black font-extrabold' type="text"placeholder='Add Title 'onChange={(event)=>{setTitle(event.target.value)}} name="" id="" />
<input className='bg-trasnparent uppercase outline-none shadow-sm focus:outline-none border-b-4 rounded-lg  hover:border-slate-900 p-4 focus:cursor text-black font-extrabold' type="text"placeholder='Add Time 'onChange={(event)=>{setTime(event.target.value)}} name="" id="" />
<div class=" flex mb-3 mt-2 pt-0 pr-32 pl-32 ">
  <input type="text" placeholder="Todo" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full " onChange={(event)=>{setWork(event.target.value)}}/>
<button onClick={createTitle} className='text-2xl font-sans font-extrabold bg-cyan-600 p-4 rounded '>Save</button>

</div>
{TodosValue.map((item,ind)=>(
        <div className='text-black font-serif' key={ind}>
          <div className='h-24 shadow-md bg-transparet rounded-lg flex ml-24 mr-24 mt-5'>
            <h1 className='text-black font-extrabold h-16 bg-white pt-2 w-36 pb-4 rounded-lg'>{item.Title}</h1>
            <h1 className='text-black h-16 shadow-lg font-extrabold bg-white pt-2 w-full border-2 pb-4 rounded-lg'>{item.Work}</h1>
            <h1 className='text-black h-16 font-extrabold bg-white pt-2 w-32 border-2 pb-1 rounded-lg'>{item.Time}</h1>
            {/* <button  className='h-16 w-32 text-white font-sans font-extrabold bg-red-900 pt-2 rounded '></button> */}
         <img className='h-16 w-32 bg-white pt-2 pb-2 bg-cover rounded shadow-lg' src={Delete}/>   {/* <DeleteIcon onClick={deleteTodo(item.id)} className='text-3xl' /> */}
          </div>
        </div>
      ))}

</div>
      </div>
    </div>
  );
}

export default App;
