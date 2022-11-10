import React from 'react';
import { useState } from 'react';
import './BookmarkCompaniesRow.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function BookmarkElement() {
    return (
        <div class = "bookmarkStack">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhiai2jewv7XGXhDeIbVHNIMQCxw6nVKGQkIWpga-uQO5fKNtXRmrqMMqybf_QB0pHzw&usqp=CAU" alt = "home depot"></img>
            <br></br>
            <button class = "view"> <Link class = "link" to="/jobs"> View Jobs </Link> </button>
        </div>
    )
}

function BookmarkedCompanies() {
    const [elements, setElements] = useState([
        <BookmarkElement/>,
        <BookmarkElement/>,
        <BookmarkElement/>,
      ]);

      const removeElement = (index) => {
        const newElements = elements.filter((_, i) => i !== index);
        setElements(newElements);
      };
    return (
        <div>
        <h1><center>Bookmarked Companies</center></h1>
        <div class = "row">
            {elements.map((element, index) => (
                <div key={index}>
                {element}
                <button class = "remove" onClick={() => removeElement(index)}> Remove</button>
                <br />
                <br />
                </div>
            ))}
        </div>
        </div>
    )
}

export default BookmarkedCompanies;