import React from 'react';
import { useState } from 'react';
import './BookmarkCompaniesRow.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import axios from 'axios';


function deleteBookmark(email, company, getCompanies) {
    axios({
        url: "http://localhost:3001/delete", 
        data: {"email": email, "company": company},
        method: "delete"
    })
    .then((response => {
        console.log(response.data);
        axios({
            url: "http://localhost:3001/get", 
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
    console.log("delete")
} 

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
            <br></br>
            <button class = "remove" onClick = {() => deleteBookmark(params.signedIn, props.company, props.getCompanies)}> Remove</button>
        </div>
    )
}

function BookmarkCluster(props) {

    return (
        <div class = "companyRow">
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

    const [showBookmarks, setShowBookmarks] = useState([
       
    ]);
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
        <Companies companies = {props.companies} getCompanies = {props.getCompanies}/>
        )
     } else {
        return (
            <div class = "message">
                <br></br>
                <h1> Sign In Above To Bookmark Companies </h1>
            </div>
        )
            }
}

function Companies(props) {
    return (
    <div class ="bookmark-container">
            <h1 > <center>Your Bookmarked Companies </center> </h1>
            <div class = "row">
                {props.companies.map((element, index) => (
                    <div key={index}>
                    <BookmarkElement company = {element} signedIn = "signedIn" getCompanies = {props.getCompanies}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookmarkedCompanies;