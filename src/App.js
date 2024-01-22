import Img_list from "./components/img_list";
import Search_bar from "./components/search_bar";
import { useEffect, useState } from "react";

function App() {
let[word,setWord] = useState('girl');
let[data,setData] = useState('');
let[show,setShow] = useState(false);

let display = data.hits ? 
data.hits.map(item=><Img_list key={item.id} data={ item }/>): '';


  return (
    <div className="container mx-auto">
      <Search_bar setWord={setWord} 
                  word={ word }
                  setData={ setData }
                  setShow={ setShow }/>
        {show ? <h1>Loading......</h1> : <h2>Start to search.</h2>}
        <div className="grid grid-cols-4 gap-4">
          { show && display }
        </div>
        { !show && data && data.hits.length === 0 ? 
        <h1 className="text-3xl">No images found</h1> : ''}
    </div>
  )
}

export default App;
