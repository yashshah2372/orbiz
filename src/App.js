import "./App.css";
import MainPage from "./Components/Home/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import Loader from "./Components/common/loader";
import React from "react";

const AboutUs = React.lazy(() => import("./Components/About/About"));
const ContactUs = React.lazy(() => import("./Components/ContactUs/ContactUs"));
const Projects = React.lazy(() => import("./Components/Projects/Projects"));
const KnowledgeBank = React.lazy(() => import("./Components/KnowledgeBank/KnowledgeBank"));
const Career = React.lazy(() => import("./Components/Career/career"));

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route
                    exact
                    path="/about-us"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <AboutUs />
                        </React.Suspense>
                    }
                ></Route>
                <Route
                    exact
                    path="/projects"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <Projects />
                        </React.Suspense>
                    }
                />
                <Route
                    exact
                    path="/career"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <Career />
                        </React.Suspense>
                    }
                ></Route>
                <Route
                    exact
                    path="/contactUs"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <ContactUs />
                        </React.Suspense>
                    }
                ></Route>
                <Route
                    exact
                    path="/KnowledgeBank"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <KnowledgeBank />
                        </React.Suspense>
                    }
                ></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
