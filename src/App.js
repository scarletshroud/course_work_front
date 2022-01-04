import logo from './logo.svg';
import { Routes, Route, Link} from "react-router-dom";
import './App.css';
import { HomePage } from "./pages/HomePage.js"
import { LoginPage } from "./pages/LoginPage.js"
import { RegisterPage } from "./pages/RegisterPage.js"
import { WelcomePage } from "./pages/WelcomePage.js"
import { MapPage } from ".pages/MapPage.js"
import { ProgressPage } from ".pages/ProgressPage.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/map" element={<MapPage/>} />
        <Route path="/progress" element={<ProgressPage/>} />
      </Routes>
    </div>
  );
}

export default App;
