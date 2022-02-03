import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggelMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#052D45'
      showAlert("Dark mode has been enable", "success")
      // setInterval(() => {
      //   document.title = "TectUtils is Amazing Mode"
      // }, 1000)
      // setInterval(() => {
      //   document.title = "install TextUtils"
      // }, 1500)

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutTxt="About utilsss" mode={mode} toggelMode={toggelMode} />
        <Alert alert={alert} />
        <Routes>
          {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route path="/about" element={<About mode={mode} />
          }>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
          }>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

