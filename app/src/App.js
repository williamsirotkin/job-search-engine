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
  const getCompanies = (Companies, bookmark) =>  {
    console.log(Companies);
    if (!bookmarkCallCompleted || bookmark) {
      setCompanies(Companies);
      bookmarkCallCompleted = true;
    }
  }

  const [signedIn, setSignedIn] = useState([]);
  const getSignedIn = (signedIn)  => {
    
  }

 
  return (
    <Router>
      <NavBar getCompanies = {getCompanies}/>
      <Routes>
      <Route path = "/" element={
          <React.Fragment>
            <BookmarkedCompanies companies = {companies} signedIn = {signedIn}/>
            <IndustriesGrid />
          </React.Fragment>
      }></Route>

      <Route path = "/:signedIn" element={
          <React.Fragment>
            <BookmarkedCompanies companies = {companies} getCompanies = {getCompanies}/>
            <IndustriesGrid/>
          </React.Fragment>
      }></Route>

      <Route path = "/sector/:sector" element={
          <SectorComponent/>
        }></Route>

      <Route path = "/sector/:sector/:signedIn" element={
          <SectorComponent getCompanies = {getCompanies}/>
        }></Route>

        <Route path = "/addCompany/add/:sector/:signedIn" element={
          <AddCompany/>
        }></Route>
        

      <Route path = "/addCompany/:edit/:sector/:signedIn" element={
          <AddCompany/>
        }></Route>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


