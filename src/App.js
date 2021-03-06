import { Routes, Route, Link } from "react-router-dom";
import SolutionEcole from "./components/SolutionEcole";
import SolutionEntreprise from "./components/solutionEntreprise/index.js";
import './App.css';
import Nav from './components/Nav';
import Index from './components/Index';

function App() {
  return (
    <div className="App">
       <Nav/>
        {/* <Essentiel/> */}
       <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/solution-entreprise" element={<SolutionEntreprise />} />
        <Route path="/solution-ecole" element={<SolutionEcole />} />
       </Routes>
    </div>
  );
}

export default App;
