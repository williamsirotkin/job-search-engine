import React from 'react';
import { useState } from 'react';
import './AddCompany.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";



function AddCompany() {
    let params = useParams();
    if (!params.edit) {
    return (
        <div class = "parent">
             <Link class = "link-edit" to = {"/sector/" + params.sector + "/signedIn"}><button class = "go-back"> Go Back</button></Link>
        <h1> Add a Company </h1><br></br>
        <div class ="company-name-row">
            <h3> Company Name </h3>
            <input class = "company-name" type="text" name="name" />   
        </div>
        <br></br>
        <Link to ="/signedIn"><button class = "submit"> Submit </button></Link>
        </div>
    )
    } else {
        return (
        <div class = "parent">
            <Link class = "link-edit" to = {"/sector/" + params.sector + "/signedIn"}><button class = "go-back"> Go Back</button></Link>
        <h1> Edit {params.edit} </h1><br></br>
        <div class ="company-name-row">
            <h3> Company Name </h3>
            <input class = "company-name" type="text" name="name" />   
        </div>
        <br></br>
        <Link to ="/signedIn"><button class = "submit"> Submit </button></Link>
        </div>
        )
    }
}

export default AddCompany;