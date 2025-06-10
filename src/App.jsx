Using Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <p>You Laughed 😂: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Laugh Again</button>
      <br></br>
    </Router>
  );
}
export default App;




