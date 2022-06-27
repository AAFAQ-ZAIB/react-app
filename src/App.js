import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);  
    if(mode === 'light'){
      setMode('light');
      showAlert("Light mode has been enable", "Success: ")
    }
    else if(mode === 'dark'){
      setMode('dark');
      showAlert("Dark mode has been enable", "Success: ")
    }
    else if(mode === 'primary'){
      setMode('primary');
      showAlert("Primary mode has been enable", "Success: ")
    }
    else if(mode === 'danger'){
      setMode('danger');
      showAlert("Danger mode has been enable", "Success: ")
    }
    else if(mode === 'warning'){
      setMode('warning');
      showAlert("Warning mode has been enable", "Success: ")
    }
    else{
      setMode('success');	
      showAlert("Success mode has been enable", "Success: ")

    }
  }

  return (
  <>
    <Navbar title="TextUtils" aboutText="About" alert={alert} mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      </div> 
      <Alert mode={mode} alert={alert}/>
  <Routes>
          <Route exact path="/About" element={<About mode={mode}/>} />
          <Route exact path="/Home" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" />} />
          <Route exact path="/" element={<TextForm mode={mode} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" />} />
  </Routes>
  </>
  );
}

export default App;
