import React from 'react';
import { useState } from 'react';
import './Sector.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

function JobElement() {
    return (
        <div class = "applyStack">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhiai2jewv7XGXhDeIbVHNIMQCxw6nVKGQkIWpga-uQO5fKNtXRmrqMMqybf_QB0pHzw&usqp=CAU" alt = "home depot"></img>
            <br></br>
            <button class = "view"> <Link class = "link" to = "/jobs">View Jobs</Link></button>
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
            <button class = "jobReturnToHome"> <Link class = "link" to="/"> Return To Home </Link></button>
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