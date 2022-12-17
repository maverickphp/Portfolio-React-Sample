import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/UI/NavBar';
import Card from './components/UI/Card';

function App() {
  return (
    <Router>
<NavBar/>
<Card/>
      <Routes>
        <Route />
      </Routes>


    </Router>
    
  );
}

export default App;