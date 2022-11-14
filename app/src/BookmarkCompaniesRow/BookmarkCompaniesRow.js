import React from 'react';
import { useState } from 'react';
import './BookmarkCompaniesRow.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

function BookmarkElement() {
    let params = useParams();
    let jobRoute = "/jobs"
    if (params.signedIn == "signedIn") {
        jobRoute += "/signedIn"
    } else {
        jobRoute += "/notSignedIn"
    }

    let jobName = "The Home Depot";
    return (
        <div class = "bookmarkStack">
            <h2> The Home Depot </h2>
            <button class = "view"> <a href = {"https://google.com/search?q=jobs+" + jobName}> View Jobs </a></button>
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