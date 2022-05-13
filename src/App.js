import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import SearchFunction from './components/searchfunction';
import ProfileModal from './components/profilemodal';
import Graph from './components/graph';

function App() {
  // const [showModal, setShowModal] = useState(false);
  // console.log(showModal)
  return (
    <Router>
      <Routes>
        <Route path="/" element={[<SearchFunction/>, <Graph />]}/>
      </Routes>
    </Router>
  );
}

export default App;
