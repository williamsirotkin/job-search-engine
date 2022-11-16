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
        jobRoute += ""
    }

    let jobName = props.company;
    return (
        <div class = "bookmarkStack">
            <h2> {props.company} </h2>
            <button class = "view"> <a target="_blank" href = {"https://google.com/search?q=jobs+" + jobName}> View Jobs </a></button>
        </div>
    )
}

function BookmarkCluster(props) {

    return (
        <div>
             {props.companies.map((i) => (
                console.log("Company : " + i),
                    <BookmarkElement company = {i} signedIn = {props.signedIn}/>     
                ))}
        </div>
    )

}

function BookmarkedCompanies(props) {
    let params = useParams();
    let SignedIn = "";
    if (params.signedIn) {
        SignedIn += params.signedIn;
    }
    const [elements, setElements] = useState([
        <BookmarkCluster companies = {props.companies} signedIn = {SignedIn}/>
      ]);

      const removeElement = (index) => {
        const newElements = elements.filter((_, i) => i !== index);
        setElements(newElements);
      };
      /*
      if (!elements){
      setElements(<BookmarkCluster company = {props.companies} signedIn = {props.signedIn}/>)
      }
      */
    if (params.signedIn) {
    return (
        <div>
            <h1><center> Your Bookmarked Companies </center></h1>
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
                <h1> Sign In Above To Bookmark Companies </h1>
                <br></br>
                <br /> <br />
            </div>
        )
            }
}

export default BookmarkedCompanies;