import "./App.css";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Profile/>} />
        <Route path="/contact" element={< Contact/>} />
        
      </Routes>
    </Router>
    // <div>
    //   <Profile />
    //   <Contact />
    // </div>
  );
}

export default App;
