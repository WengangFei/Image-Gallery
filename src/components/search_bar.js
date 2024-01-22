import React from 'react';

export default function Search_bar({ setWord,word,setData,setShow }){

function submit(e){
    e.preventDefault();
    setShow((prev)=>!prev);
    let URL = "https://pixabay.com/api/?key=41946584-34e060113e059c5526613deaa"+"&q="+encodeURIComponent(word);
    fetch(URL).then(resp=>resp.json()).then(data=>setData(data)).catch(error=>console.log(error))
}
  return (
    <div>
        <form className='py-5'onSubmit={ submit }>
            <div className="">
                <div className="items-center ">
                    <label htmlFor="remember" className=" text-xl font-medium text-black-500">Search the Images: </label><br /><br />
                    <input type="text" onChange={(e)=>setWord(e.target.value)}id="last_name" className="border-solid border-2 border-sky-500 rounded-lg " />
                </div><br />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
  )
}
