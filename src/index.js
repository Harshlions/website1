import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Project from './pages/Project';
import Service from './pages/Service'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route path="Project" element={< Project />} />
        <Route path="Service" element={< Service />} />
        </Route>
       </Routes>
     </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));