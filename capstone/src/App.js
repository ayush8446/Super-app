import { Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home";
import { Genre } from "./Pages/Genere";


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/genre" element={<Genre />} />
    
    
  </Routes>
  )
}

export default App;
