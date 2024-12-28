import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
const App=()=>{
    return (
        <div className="app">
            
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

            </Routes>
            </BrowserRouter>
        </div>
    )
};
export default App;