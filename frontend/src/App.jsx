import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home';
import AnstehendeInspectionen from './Pages/AnstehendeInspektionen';
import UnternehmenDetailseite from './Pages/UnternehmenDetailseite';
import Inspektionsmodule from './Pages/Inspektionsmodule';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home/:id?" element={<Home />} />
          <Route path="/AnstehendeInspektionen" element={<AnstehendeInspectionen />} />
          <Route path="/UnternehmenDetailseite" element={<UnternehmenDetailseite />} /> 
          <Route path="/Inspektionsmodule" element={<Inspektionsmodule />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
