import './App.css';
import React from 'react'
import IndustriesGrid from './IndustriesGrid/IndustriesGrid.js'
import NavBar from './NavBar/NavBar.js'
import BookmarkedCompanies from './BookmarkCompaniesRow/BookmarkCompaniesRow.js'
import UniversityApplyRow from './UniversityApply/UniversityApply.js'


function App() {
  return (
  <React.Fragment>
    <NavBar />
    <IndustriesGrid/>
    <BookmarkedCompanies/>
    <UniversityApplyRow/>
    </React.Fragment >
  );
}

export default App;
