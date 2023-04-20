
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
    
  }
  
  return (
  <>
  <Router>

  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> 
  <Alert alert={alert}/>
 {/* <Navbar/> */}
 <div className="container my-3">
 <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here to analyse below" mode={mode}/>}/>  
  </Routes>

 </div>

 </Router>
  
  
</>
  );
}

export default App;
