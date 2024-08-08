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
        {`Data is: ${data}`}
      </div>
    </>
  )
}

export default App
