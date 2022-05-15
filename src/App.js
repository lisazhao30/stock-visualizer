import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchFunction from './components/searchfunction';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={[<SearchFunction/>]}/>
      </Routes>
    </Router>
  );
}

export default App;
