import './App.css';

function App() {
  return (
    <div className=" rounded-lg m-12 mt-10 text-center shadow-xl ">
      <h2 className='bg-cyan-600 pt-4 pb-4   items-center    text-5xl font-sans '>TodoApp</h2>
      <div className='text-white shadow-lg h-32 p-4 font-mono text-3xl '>
        
<form>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required=""/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
<div className='text-white shadow-lg   bg-white rounded-lg h-96 mt-24'>
<input className='bg-trasnparent uppercase outline-none shadow-sm focus:outline-none border-b-4 rounded-lg  hover:border-slate-900 p-4 focus:cursor text-black font-extrabold' type="text"placeholder='Add Title ' name="" id="" />
<div class="mb-3 mt-2 pt-0 pr-32 pl-32 ">
  <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
</div>
</div>

      </div>
    </div>
  );
}

export default App;
