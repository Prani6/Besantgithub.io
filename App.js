import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Index from "./components/Index";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation();

  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item lg={2.5} md={3} sm={12}>
        <Index />
      </Grid>

      {/* Main Content */}
      <Grid item lg={9.5} md={9} sm={12}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Hide Footer on the Index Page ("/") */}
        {location.pathname !== "/" && <Footer />}
      </Grid>
    </Grid>
  );
};

export default App;
