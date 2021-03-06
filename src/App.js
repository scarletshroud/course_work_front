import logo from './logo.svg';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.js"
import LoginPage from "./pages/LoginPage.js"
import RegisterPage from "./pages/RegisterPage.js"
import WelcomePage from "./pages/WelcomePage.js"
import MapPage from "./pages/MapPage.js"
import ProgressPage from "./pages/ProgressPage.js"
import SpotPage from "./pages/SpotPage.js"
import Logout from "./pages/Logout.js"
import Navibar from "./components/Navibar.js"
import TricksPage from './pages/TricksPage';
import TrickPage from './pages/TrickPage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <Routes>
        <Route path="/welcome" element={<WelcomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/map" element={<MapPage/>}/>
        <Route path="/learn" element={<ProgressPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegisterPage/>}/>
        <Route path="/tricks" element={<TricksPage/>}/>
        <Route path="/trick/:id" element={<TrickPage/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/spot/:id" element={<SpotPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
