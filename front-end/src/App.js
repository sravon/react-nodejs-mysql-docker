import { useEffect, useState } from "react";
import Item from "./components/item";

function App() {
  const [patients, setPatients] = useState([])
  useEffect(() => {
    async function fetchText() {
      let response = await fetch('http://localhost:3000/patients');
      //let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/patients`);
      let data = await response.json();
      if(data.httpStatus === "OK"){
        setPatients(data.data.patients)
      }
      
    }
    fetchText()
  }, [])
  
  return (
    <div style={{width:"40%",margin:"0 auto",marginTop:20}}>
      <h2>Patients List</h2>
      <hr/>
      {patients.map((item,i)=><Item key={i} name={item.first_name+" "+ item.last_name} />)}
    </div>
  );
}

export default App;
