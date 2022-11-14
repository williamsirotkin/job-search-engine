import React from 'react';
import { useState } from 'react';
import './Sector.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

function JobElement() {
    return (
        <div class = "applyStack">
            <h2> The Home Depot </h2>
            <button class = "view"> <a target="_blank" href ="http://google.com/search?q=jobs"> View Jobs </a></button>
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
            <div class = "topRow">
            <h1><center> {props.sector} Companies </center></h1>
            <button class = "add"> <Link  class = "add2" to = "/addCompany">Add A Company To This List </Link></button>
            </div>
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
            <h1><center> {props.sector} Companies </center></h1>
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