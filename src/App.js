import logo from './logo.svg';
import {Routes, Route, Link, Router} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage.js"
import LoginPage from "./pages/LoginPage.js"
import RegisterPage from "./pages/RegisterPage.js"
import {WelcomePage} from "./pages/WelcomePage.js"
import MapPage from "./pages/MapPage.js"
import ProgressPage from "./pages/ProgressPage.js"
import Navibar from "./components/Navibar.js"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/map" element={<MapPage/>}/>
        <Route path="/learn" element={<ProgressPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
