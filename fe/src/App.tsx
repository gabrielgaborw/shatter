import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState<string | unknown>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000");
      const result = await res.data;
      
      setData(result);
    }
  
    fetchData();
  }, [])

  return (
    <>
      <div>
        {/* {`Data is: ${data}`} */}
        <ul id="messages"></ul>
        <form id="form" action="">
          <input id="input" autoComplete='off' /><button>Send</button>
        </form>
      </div>
    </>
  )
}

export default App
