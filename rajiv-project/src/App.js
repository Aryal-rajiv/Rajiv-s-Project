import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import './styles.css';

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project1" element={<Project1 />} />
                <Route path="/project2" element={<Project2 />} />
                <Route path="/project3" element={<Project3 />} />
                <h1>Welcome to my project</h1>
                <p>lets see what ghappenbs</p>

            </Routes>
        </Router>
    );
};

export default App;