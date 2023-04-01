import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
import Spinner from './components/Spinner';

function App() {
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  const showLoading = (type)=> {
    setLoading(type)
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert} showLoading={showLoading} />
          {loading && <Spinner loading={loading} />}
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} showLoading={showLoading} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert} showLoading={showLoading} />} />
              <Route path="/signup" element={<Signup showAlert={showAlert} showLoading={showLoading} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
