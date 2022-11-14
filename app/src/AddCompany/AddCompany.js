import React from 'react';
import { useState } from 'react';
import './AddCompany.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";



function AddCompany() {
    let params = useParams();
    if (!params.edit) {
    return (
        <div class = "parent">
        <h1> Add a Company </h1><br></br>
        <div class ="company-name-row">
            <h3> Company Name </h3>
            <input class = "company-name" type="text" name="name" />   
        </div>
        <div class = "description-row">
            <h3> Description </h3>
            <input class = "description" type="text" name="name" />  
        </div>
        <br></br>
        <Link to ="/signedIn"><button class = "submit"> Submit </button></Link>
        </div>
    )
    } else {
        return (
        <div class = "parent">
        <h1> Edit {params.edit} </h1><br></br>
        <div class ="company-name-row">
            <h3> Company Name </h3>
            <input class = "company-name" type="text" name="name" />   
        </div>
        <div class = "description-row">
            <h3> Description </h3>
            <input class = "description" type="text" name="name" />  
        </div>
        <br></br>
        <Link to ="/signedIn"><button class = "submit"> Submit </button></Link>
        </div>
        )
    }
}

export default AddCompany;