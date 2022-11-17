import './App.css';
import React, {useState, useEffect} from 'react'
import IndustriesGrid from './IndustriesGrid/IndustriesGrid.js'
import NavBar from './NavBar/NavBar.js'
import Footer from './Footer/Footer.js'
import BookmarkedCompanies from './BookmarkCompaniesRow/BookmarkCompaniesRow.js'
import SectorComponent from './Sectors/Sector.js'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AddCompany from './AddCompany/AddCompany.js';
import axios from 'axios';

let bookmarkCallCompleted = false; 

function App() { 
  const [companies, setCompanies] = useState([]);
  const getCompanies = (Companies) =>  {
    console.log(Companies);
    if (!bookmarkCallCompleted) {
      setCompanies(Companies);
      bookmarkCallCompleted = true;
    }
  }

 
  return (
    <Router>
      <NavBar getCompanies = {getCompanies}/>
      <Routes>
      <Route path = "/" element={
          <React.Fragment>
            <BookmarkedCompanies companies = {companies}/>
            <IndustriesGrid />
          </React.Fragment>
      }></Route>

      <Route path = "/:signedIn" element={
          <React.Fragment>
            <BookmarkedCompanies companies = {companies}/>
            <IndustriesGrid/>
          </React.Fragment>
      }></Route>

      <Route path = "/sector/:sector" element={
          <SectorComponent/>
        }></Route>

      <Route path = "/sector/:sector/:signedIn" element={
          <SectorComponent/>
        }></Route>

        <Route path = "/addCompany/add/:sector" element={
          <AddCompany/>
        }></Route>
        

      <Route path = "/addCompany/:edit/:sector" element={
          <AddCompany/>
        }></Route>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


