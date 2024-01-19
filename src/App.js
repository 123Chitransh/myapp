// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import About from './component/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// let name = 'chinu';
function App() {
  const [Mode, setMode] = useState('light');
  const [level, setLevel] = useState("Enable Dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({
      msg: message,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      setLevel("Enable light")
      showAlert("Dark mode is Enable ! ");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setLevel("Enable Dark")
      showAlert("Light mode is Enable ! ");
    }
  };

  return (

    <>
      <Router>
        <Navbar title="CHINU" about="AboutTextutils" mode={Mode} toggleMode={toggleMode} level={level} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<Textform showAlert={showAlert} heading="Enter your text" mode={Mode} />}></Route>
          <Route exact path='/about' element={<About mode={Mode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

Navbar.propTypes = { title: propTypes.string.isrequired, aboutText: propTypes.string };

export default App;
Navbar.defaultProps = {
  title: 'Navbar',
  about: 'About'
};









  // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>