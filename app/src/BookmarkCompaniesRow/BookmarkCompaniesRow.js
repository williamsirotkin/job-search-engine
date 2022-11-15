import React from 'react';
import { useState } from 'react';
import './BookmarkCompaniesRow.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

function BookmarkElement(props) {
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
            <h2> {props.company} </h2>
            <button class = "view"> <a target="_blank" href = {"https://google.com/search?q=jobs+" + jobName}> View Jobs </a></button>
        </div>
    )
}

function BookmarkedCompanies() {
    let params = useParams();

    const [elements, setElements] = useState([
        <BookmarkElement company = "Home Depot"/>,
        <BookmarkElement company = "Lowes"/>,
        <BookmarkElement company = "Delta"/>,
      ]);

      const removeElement = (index) => {
        const newElements = elements.filter((_, i) => i !== index);
        setElements(newElements);
      };
    if (params.signedIn) {
    return (
        <div>
        <h1><center> <u>Your Bookmarked Companies </u></center></h1>
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
    ) } else {
        return (
            <div class = "message">
                <br></br>
                <h1>Sign In Above To Bookmark Companies  </h1>
                </div>
        )
            }
}

export default BookmarkedCompanies;