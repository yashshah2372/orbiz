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
const CompletedProjects = React.lazy(() => import("./Components/Projects/CompletedProjects"));
const KnowledgeBank = React.lazy(() => import("./Components/KnowledgeBank/KnowledgeBank"));
const Career = React.lazy(() => import("./Components/Career/career"));

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/orbiz" element={<MainPage />}></Route>
                <Route
                    exact
                    path="/orbiz/about-us"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <AboutUs />
                        </React.Suspense>
                    }
                ></Route>
                <Route
                    exact
                    path="/orbiz/projects"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <Projects />
                        </React.Suspense>
                    }
                />
                <Route
                    exact
                    path="/orbiz/CompletedProjects"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <CompletedProjects />
                        </React.Suspense>
                    }
                ></Route>
                <Route
                    exact
                    path="/orbiz/enquire"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <ContactUs />
                        </React.Suspense>
                    }
                ></Route>
                <Route
                    exact
                    path="/orbiz/KnowledgeBank"
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
