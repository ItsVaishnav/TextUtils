
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

const [MyColor , setColor] = useState(null);

const setColorCall = () =>{
    let co = document.getElementById("ColorInput").value;
    setColor(co);
    document.body.style.backgroundColor = MyColor;
}

const [mode , setMode] = useState("light");
const [alert , setAlert] = useState(null);

const showalert = (type , msg) =>{
        // let dissmiss = document.getElementById("myAlert");
        // dissmiss.style.display="block"
    setAlert({
        message : msg,
        type : type
    })
    
    setTimeout(() => {
        // let dissmiss = document.getElementById("myAlert");
        // dissmiss.style.display="none"
        setAlert(null);
    }, 2000);
}

  const togglemode = () => {



    // setInterval(() => {
    //   document.title="This is TextUtiles";
    // }, 4000);
    // setInterval(() => {
    //   document.title="How was Your Experiance";
    // }, 1700);

    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#4a5162";
      showalert("success", "Your Dark mode has been Activeted successfully");
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showalert("success", "Your Light mode has been Activeted successfully");
    }
  }
  return (
    <>
    <Router>
<Navbar title="TextUtils" mode={mode} togglemode={togglemode} setColorCall={setColorCall}/>
<div className="container">
  <Routes>
    <Route exact path="/about" element={<About/>}>
    </Route>

{/* Use exact before path only path is also valid */}

    <Route exact path="/" 
      element={<TextForm headding="Enter a Text to analyse below" mode={mode} showalert={showalert}/>}>
    </Route>
  </Routes>
  
<Alert alert={alert}/>
</div>
<div className="container">
</div>
</Router>
    </>
  );
}

export default App;
