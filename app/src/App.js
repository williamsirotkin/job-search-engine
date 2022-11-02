import logo from './logo.svg';
import './App.css';
import IndustriesGrid from './IndustriesGrid/IndustriesGrid.js'
import NavBar from './NavBar/NavBar.js'
import BookmarkedCompanies from './BookmarkCompaniesRow/BookmarkCompaniesRow.js'


function App() {
  return (
  <React.Fragment>
    <NavBar />
       <IndustriesGrid/>
    <BookmarkedCompanies/>
    </React.Fragment >
  );
}

export default App;
