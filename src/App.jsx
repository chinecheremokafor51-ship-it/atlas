import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Communities from "./Communities";
import Blog from "./Blog";
import Contact from "./Contact";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/communities" element={<Communities />}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}