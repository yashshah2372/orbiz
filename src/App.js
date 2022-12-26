import "./App.css";
import MainPage from "./Components/Home/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/common/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/common/Footer";
import Career from "./Components/Career/career";
import ContactUs from "./Components/ContactUs/ContactUs";
import KnowledgeBank from "./Components/KnowledgeBank/KnowledgeBank";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route exact path="/about-us" element={<About />}></Route>
                <Route exact path="/projects" element={<Projects />}></Route>
                <Route exact path="/career" element={<Career />}></Route>
                <Route exact path="/projects" element={<Projects />}></Route>
                <Route exact path="/contactUs" element={<ContactUs />}></Route>
                <Route exact path="/KnowledgeBank" element={<KnowledgeBank />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
