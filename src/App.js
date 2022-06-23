// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light'); //Whether Dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
      /*setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils now";
      }, 1500);*/
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor = '#060543';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
  }
  return (
    // only one element can be returned, multiple can be returned using jsx fragment
    <>    
      {/* <Navbar title="TextUtils" about="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Router>
        
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3" >
          <Routes>
            {/* react always does partial matching for exact matching we use exact path
            /users  --component1
            /users/home --component2
            */}
              <Route exact path="/about" element={<About />}>
                {/* {} */}
              </Route>
              <Route exact path="/" element={<TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>}>
                {/* {<TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>} */}
              </Route>
          </Routes>

        </div>
      
      </Router>
    </>

  );
}

export default App;
