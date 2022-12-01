import React, { useEffect } from 'react';
import { useState } from 'react';
import './Sector.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import axios from 'axios'


function bookmarkCompany(email, company, getCompanies) {
    alert("Bookmarked " + company)
    axios({
        url: "https://backend-ogxg4b6p6a-ue.a.run.app/create", 
        data: {"email": email, "company": company},
        method: "post"
    })
    .then((response => {
        console.log(response.data);
        axios({
            url: "https://backend-ogxg4b6p6a-ue.a.run.app/get", 
            data: {"email": email},
            method: "post"
        })
        .then((response => {
            console.log(response.data);
            let companyArr = []
            for (let i = 0; i < response.data.length; i++) {
                companyArr.push(response.data[i].company)
            }
            console.log("companyArr" + companyArr)
            getCompanies(companyArr, true)
        }))
        .catch((error) => {
            console.log("ERROR" + error);
        });
    }))
    .catch((error) => {
        console.log("ERROR" + error);
    });
}

function JobElement(props) {
    console.log(props.signedIn)
    if (props.signedIn) {
    return (
        <div class = "applyStack">
            <h6> {props.name} </h6>
            <button class = "view"> <a target="_blank" href ={"http://google.com/search?q=jobs+" + props.name}> View Jobs </a></button>
            <Link class = "edit-item" to ={"/addCompany/" + props.name + "/" + props.sector + '/' + props.signedIn}><button class = "edit">Edit Item </button></Link>
            <button class = "bookmark" onClick={() => bookmarkCompany(props.email, props.name, props.getCompanies)}> Bookmark </button>
        </div>
    )
    }
    return (
        <div class = "applyStack">
            <h6> {props.name} </h6>
            <button class = "view"> <a target="_blank" href ={"http://google.com/search?q=jobs+" + props.name}> View Jobs </a></button>
        </div>
    )
}

function JobCluster(props) {
    return (
        <div class = "jobContainer">
            {props.names.map((i) => (
                console.log(i),
        <JobElement getCompanies = {props.getCompanies} email = {props.email} sector = {props.sector} name = {i} signedIn = {props.signedIn}/>     
        ))}
        </div>
    )
}

function SectorComponent(params) {
    let companies = []
    let props = useParams()
    let SignedIn = "";
    if (props.signedIn) {
        SignedIn += props.signedIn
    }
    const [elements, setElements] = useState([
      ]);
      
    useEffect(() => {
        axios({
            url: "https://backend-ogxg4b6p6a-ue.a.run.app/getAddedCompanies/",
            data: {"sector": props.sector},
            method: "post"})
        .then((response => {
            console.log("abc: " + response.data[0])
            for (let i = 0; i < response.data.length; i++) {
                console.log("marc: " + response.data[i].company)
                companies.push(response.data[i].company);
            }
            axios({
                url: "https://backend-ogxg4b6p6a-ue.a.run.app/getModifiedCompanies/",
                data: {"sector": props.sector},
                method: "post"})
            .then((response => {
                console.log("abcd: " + response.data[0])
                for (let i = 0; i < companies.length; i++) {
                    console.log(companies.length)
                    for (let j = 0; j < response.data.length; j++) {
                        console.log(response.data.length)
                        console.log("acef " + response.data[j].oldName + ", " + companies[j] + "," + i)
                        if (companies[i] == response.data[j].oldName) {
                            companies[i] = response.data[j].newName
                        }
                    }
                }
                setElements(<JobCluster getCompanies = {params.getCompanies} email = {props.signedIn} sector = {props.sector} names = {companies} signedIn = {SignedIn}/>)
                console.log("Look here" + companies[0]);
            })) .catch((error) => {
                    console.log(error);
            });
        })) .catch((error) => {
                console.log(error);
        });
}, [])


      const bookmarkElement = (index) => {
        //const newElements = elements.filter((_, i) => i !== index);
       // setElements(newElements);
      };
      
      if (props.signedIn) {
      return (
        <div class = "center">
            <h1 class = "sector-title"> <u>{props.sector} Sector </u></h1>
            <Link class = "add-company" to ={"/addCompany/add/" + props.sector + "/" + props.signedIn}><button class = "add">  Add a Company To This List </button></Link>
            <h2>{elements}</h2>
        </div>
      )
      } else {
        return (
            <div class = "center">
                <h1 class = "sector-title"> <u>{props.sector} Sector </u></h1>
                <h2>{elements}</h2>
            </div>
          )
      }
      
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