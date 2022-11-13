import './App.css';
import React from 'react'
import IndustriesGrid from './IndustriesGrid/IndustriesGrid.js'
import NavBar from './NavBar/NavBar.js'
import BookmarkedCompanies from './BookmarkCompaniesRow/BookmarkCompaniesRow.js'
import SectorComponent from './Sectors/Sector.js'
import JobPage from "./JobPage/JobPage.js"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() { 
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path = "/" element={
          <React.Fragment>
            <IndustriesGrid />
            <BookmarkedCompanies/>
          </React.Fragment>
      }></Route>
      <Route path = "/jobs" element={<JobPage />}></Route>
      <Route path = "/sector" element={<SectorComponent/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;


