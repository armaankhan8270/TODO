import { addDoc, collection, getDocs ,doc,deleteDoc} from 'firebase/firestore';
import './App.css';
import { db } from './firebase--config';
import { useState,useEffect } from 'react';
import { async } from '@firebase/util';
import Delete from './de.jpg'
import Navbar from './Pages/Navbar';
import SignIn from './Pages/SignIn';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Arman from './Pages/Arman';
// import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [TodosValue, setTodosValue] = useState([])
  const [Work, setWork] = useState([])
  const [Title, setTitle] = useState([])
  const [Time, setTime] = useState([])
  const [Number, setNumber] = useState(1)
  const usersCollectionRef = collection(db, "Todos");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data)
      setTodosValue(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [Number]);
 
  const createTitle=async()=>{
   await addDoc(usersCollectionRef,{Title:Title,Time:Time,Work:Work})
    
  }
  
  const deleteTodo=async(id)=>{
    const TodoDoc=doc(db,"Todos",id)
    await deleteDoc(TodoDoc)

  }
  const IncreaseNumber=()=>{
    setNumber(Number+1)
  }
  const DecreaseNumber=()=>{
    setNumber(Number-1)
  }
  const DoubleFuction=()=>{
    createTitle()
    IncreaseNumber()
    
  }
  const DeleteFuction=async(id)=>{
  
    
    const TodoDoc=doc(db,"Todos",id)
    await deleteDoc(TodoDoc)
    DecreaseNumber()
  
    
  }
  

  return (
    <>
   
    {/* <Navbar/> */}
    {/* <SignIn/> */}
    <div className=" rounded-lg m-12 mt-10 text-center shadow-xl bg-[#ADD8E6]  ">

      <h2 className='bg-cyan-600 pt-4 pb-4   items-center    text-5xl font-sans '>TodoApp</h2>
      <div className='text-white shadow-lg h-32 bg-white p-4 font-mono text-3xl '>
        


<h1 className='ml-72 mr-32 text-5xl font-serif bg-slate-500 rounded-lg shadow-lg w-1/2 text-black align-middle mt-12'>Your Todos</h1>
<div className='hover:bg-cyan-600 text-white shadow-lg gap-20 rounded-lg h-screen  bg-cyan-600 mt-24'>
<input className='mt-12 mb-12 hover:bg-cyan-400 hover:text-4xl bg-trasnparent uppercase outline-none shadow-sm focus:outline-none border-b-4 rounded-lg  hover:border-slate-900 p-4 focus:cursor text-black font-extrabold' type="text"placeholder='Add Title 'onChange={(event)=>{setTitle(event.target.value)}} name="" id="" />
<input className='hover:bg-cyan-400 bg-trasnparent auto-focus uppercase outline-none shadow-sm focus:outline-none border-b-4 rounded-lg  hover:border-slate-900 p-4 focus:cursor text-black font-extrabold' type="time"placeholder='Add Time 'onChange={(event)=>{setTime(event.target.value)}} name="" id="" />
<div class=" flex mb-3 mt-2 pt-0 pr-32 pl-32 ">
  <input type="text" placeholder="Todo" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full " onChange={(event)=>{setWork(event.target.value)}}/>
<button onClick={DoubleFuction} className='text-2xl font-sans font-extrabold bg-cyan-400 p-4 rounded '>Save</button>

</div>
{TodosValue.map((item,ind)=>(
        <div className='text-black items-center font-serif' key={ind}>
          <div className='h-24 shadow-lg items-center   bg-transparent rounded-lg flex ml-24 mr-24 mt-5'>
            <h1 className='text-black hover:shadow-lg hover:bg-cyan-400 font-extrabold h-16 bg-white  w-1/2 pb-2 rounded-lg'>Title:{item.Title}</h1>
            <h1 className='text-black h-16 shadow-lg hover:bg-cyan-400 font-extrabold bg-white pt-2 w-full border-2 pb-4 rounded-lg'>Todo:{item.Work}</h1>
            <h1 className='text-black h-16 hover:bg-cyan-400 font-extrabold bg-white pt-2 w-full border-2 pb-1 rounded-lg'>Time:{item.Time}</h1>
         <img  onClick={() => {
                DeleteFuction(item.id)
                console.log(item.id);
              }} className='h-16 w-24 bg-white b rounded shadow-lg' src={Delete}/>   {/* <DeleteIcon onClick={deleteTodo(item.id)} className='text-3xl' /> */}
          </div>
        </div>
      ))}

</div>
      </div>
    </div>
   
    </>
  );
}

export default App;
