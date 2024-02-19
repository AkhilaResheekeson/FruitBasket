import React,{useState} from "react";
import './App.css';

function App() {
  
  let [appleCount,setAppleCount]=useState(0);
  let [mangoCount,setMangoCount]=useState(0);
  let [orangeCount,setOrangeCount]=useState(0);

  return (
    <div className="App">
            <h1><u>FRUIT BASKET</u></h1>
            <div className="apple">
            <h3>Apple: {appleCount}</h3>
            <button onClick={()=>setAppleCount(appleCount+1)}>+</button>
            <button onClick={()=>setAppleCount(appleCount-1)}>-</button>
            <button onClick={()=>setAppleCount(0)}>Clear</button>
            </div>
            <div className="mango">
            <h3>Mango : {mangoCount}</h3>
            <button onClick={()=>setMangoCount(mangoCount+1)}>+</button>
            <button onClick={()=>setMangoCount(mangoCount-1)}>-</button>
            <button onClick={()=>setMangoCount(0)}>Clear</button>
            </div>
            <div className="orange">
            <h3>Orange: {orangeCount}</h3>
            <button onClick={()=>setOrangeCount(orangeCount+1)}>+</button>
            <button onClick={()=>setOrangeCount(orangeCount-1)}>-</button>
            <button onClick={()=>setOrangeCount(0)}>Clear</button>
            </div>
            <h3>Total number of fruits in the basket:{appleCount+mangoCount+orangeCount}</h3>
        </div>
  );
}

export default App;
