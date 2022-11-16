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


function App() { 
  const [elements, setElements] = useState([]);
  const [companies, setCompanies] = useState([]);
  const getEmail = (email) =>  {
    console.log(email);
    setElements(email);
      axios.get("http://localhost:3001/email/" + elements)
      .then((response => {
          console.log(response.data);
          setCompanies(response.data)
      }))
      .catch((error) => {
          console.log(error);
      });
}

 
  return (
    <Router>
      <NavBar getEmail = {getEmail}/>
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


