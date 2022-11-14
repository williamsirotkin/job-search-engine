import './App.css';
import React from 'react'
import IndustriesGrid from './IndustriesGrid/IndustriesGrid.js'
import NavBar from './NavBar/NavBar.js'
import BookmarkedCompanies from './BookmarkCompaniesRow/BookmarkCompaniesRow.js'
import SectorComponent from './Sectors/Sector.js'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { loadAuth2WithProps } from 'gapi-script';


function App() { 
  return (
    <Router>
      <NavBar/>
      <Routes>


      <Route path = "/" element={
          <React.Fragment>
            <IndustriesGrid />
          </React.Fragment>
      }></Route>

      <Route path = "/:signedIn" element={
          <React.Fragment>
            <IndustriesGrid />
            <BookmarkedCompanies/>
          </React.Fragment>
      }></Route>

      <Route path = "/sector/:sector" element={
          <SectorComponent/>
        }></Route>

      <Route path = "/sector/:sector/:signedIn" element={
          <SectorComponent/>
        }></Route>
        
      </Routes>
    </Router>
  );
}

export default App;


