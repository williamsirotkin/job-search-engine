import React, { useEffect } from 'react';
import { useState } from 'react';
import './Sector.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import axios from 'axios'

function JobElement(props) {
    console.log(props.signedIn)
    if (props.signedIn) {
    return (
        <div class = "applyStack">
            <h3> {props.name} </h3>
            <button class = "view"> <a target="_blank" href ={"http://google.com/search?q=jobs+" + props.name}> View Jobs </a></button>
            <Link class = "edit-item" to ={"/addCompany/" + props.name}><button class = "edit">Edit Item </button></Link>
            <button class = "bookmark" onClick={() => alert("Bookmarked!!")}> Bookmark </button>
        </div>
    )
    }
    return (
        <div class = "applyStack">
            <h3> {props.name} </h3>
            <button class = "view"> <a target="_blank" href ={"http://google.com/search?q=jobs+" + props.name}> View Jobs </a></button>
        </div>
    )
}

function JobCluster(props) {
    return (
        <div>
            {props.names.map((i) => (
                console.log(i),
        <JobElement name = {i} signedIn = {props.signedIn}/>     
        ))}
        </div>
    )
}

function SectorComponent() {
    let companies = []
    let props = useParams()
    let SignedIn = "";
    if (props.signedIn) {
        SignedIn += props.signedIn
    }
    const [elements, setElements] = useState([
      ]);
      
    useEffect(() => {
    axios.get("https://api-v2.intrinio.com/companies?sector=" + ensureSectorName(props.sector), { 'headers': { 'Authorization': "Ojg2MzFhNTE2NzFlOGZjZmI5MDQwYjJlZGVkMWE3ZTU3" } })
    .then((response => {
        for (let i = 0; i < response.data.companies.length; i++) {
            companies.push(response.data.companies[i].name);
        }
        setElements(<JobCluster names = {companies} signedIn = {SignedIn}/>)
        console.log("Look here" + companies[0]);
    }))
    .catch((error) => {
        console.log(error);
    });
}, [])


      const bookmarkElement = (index) => {
        //const newElements = elements.filter((_, i) => i !== index);
       // setElements(newElements);
      };
      
      return (
        <div>
        <h1 class = "sector-title"> <u>{props.sector} Sector </u></h1>
        <h2>{elements}</h2>
        </div>
      )
      
      
    if (props.signedIn) {
    return (
        <div>
            <h1> {elements}</h1>
            <div class = "topRow">
            <h1><center> {props.sector} Companies </center></h1>
            <button class = "add"> <Link  class = "add2" to = "/addCompany">Add A Company To This List </Link></button>
            </div>
            <div class = "row">
                {elements.map((element, index) => (
                    <div key={index}>
                    {element}
                    <Link to = "/addCompany/HomeDepot"><button class = "edit">Edit Item </button></Link>
                    <br></br>
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

function ensureSectorName(str) {
    if (str == "Tech") {
        return "Technology"
    } else if (str == "Automotive") {
        return "Industrial Goods"
    } else if (str == "Finance") {
        return "Financial"
    } else if (str == "Healthcare") {
        return "Healthcare"
    } else if (str == "Consumer Goods") {
        return "Consumer Goods"
    } else if (str == "Energy") {
        return "Utilities"
    } 
    return "Basic Materials"
}

export default SectorComponent;