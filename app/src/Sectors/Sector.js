import React from 'react';
import { useState } from 'react';
import './Sector.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

function JobElement() {
    return (
        <div class = "applyStack">
            <h2> The Home Depot </h2>
            <button class = "view"> <a href ="http://google.com/search?q=jobs"> View Jobs </a></button>
        </div>
    )
}

function SectorComponent() {
    let props = useParams()
    const [elements, setElements] = useState([
        <JobElement/>,
        <JobElement/>,
        <JobElement/>,
      ]);

      const bookmarkElement = (index) => {
        //const newElements = elements.filter((_, i) => i !== index);
       // setElements(newElements);
      };
    if (props.signedIn) {
    return (
        <div>
            <h1><center> {props.sector} Companies </center></h1>
            <div class = "row">
                {elements.map((element, index) => (
                    <div key={index}>
                    {element}
                    <button class = "bookmark" onClick={() => alert("Bookmarked!!")}> Bookmark </button>
                    </div>
                ))}
        </div>
        </div>
    )
    }
    return (
        <div>
            <button class = "jobReturnToHome"> <Link class = "link" to="/"> Return To Home </Link></button>
            <h1><center> {props.sector} Jobs </center></h1>
            <div class = "row">
                {elements.map((element, index) => (
                    <div key={index}>
                    {element}
                    </div>
                ))}
        </div>
        </div>
    )
}

export default SectorComponent;