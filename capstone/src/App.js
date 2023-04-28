import { Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home";
import { Genre } from "./Pages/Genere";
// import  { Browse } from "./Pages/Browse";


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/genre" element={<Genre />} />
    {/* <Route path="/browse" element={<Browse />} /> */}
    
    
  </Routes>
  )
}

export default App;
