import './App.css';
import React, {useState, useEffect} from 'react'
import IndustriesGrid from './IndustriesGrid/IndustriesGrid.js'
import NavBar from './NavBar/NavBar.js'
import BookmarkedCompanies from './BookmarkCompaniesRow/BookmarkCompaniesRow.js'
import SectorComponent from './Sectors/Sector.js'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AddCompany from './AddCompany/AddCompany.js';
import axios from 'axios';


function App() { 
  const [elements, setElements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/fakeemail@gmail.com")
    .then((response => {
        console.log(response.data);
        setElements(response.data)
    }))
    .catch((error) => {
        console.log(error);
    });
  }, [])
  
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path = "/" element={
          <React.Fragment>
            <BookmarkedCompanies companies = {elements}/>
            <IndustriesGrid />
          </React.Fragment>
      }></Route>

      <Route path = "/:signedIn" element={
          <React.Fragment>
            <BookmarkedCompanies companies = {elements}/>
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
    </Router>
  );
}

export default App;


