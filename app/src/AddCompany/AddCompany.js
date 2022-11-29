import React from 'react';
import { useState } from 'react';
import './AddCompany.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import axios from 'axios';

function addCompany(name, sector) {
    axios({
        url: "http://localhost:3001/addCompany", 
        data: {"company": name, "sector": sector},
        method: "post"
    })
    .then((response => {
        console.log(response.data);
    }))
    .catch((error) => {
        console.log("ERROR" + error);
    });
}

function editCompany(oldName, newName, sector) {
    axios({
        url: "http://localhost:3001/createModifiedCompany", 
        data: {"oldName": oldName, "newName": newName, "sector": sector},
        method: "post"
    })
    .then((response => {
        console.log(response.data);
    }))
    .catch((error) => {
        console.log("ERROR" + error);
    });
}

function AddCompany() {
    const [input, setInput] = useState('');
    let params = useParams();
    if (!params.edit) {
    return (
        <div class = "parent">
             <Link class = "link-edit" to = {"/sector/" + params.sector + "/signedIn"}><button class = "go-back"> Go Back</button></Link>
        <h1> Add a Company </h1><br></br>
        <div class ="company-name-row">
            <h3> Company Name </h3>
            <input class = "company-name" onChange={event => setInput(event.target.value)} type="text" name="name" />   
        </div>
        <div class = "description-row">
            <h3> Description </h3>
            <input class = "description" type="text" name="name" />  
        </div>
        <br></br>
        <Link to ="/"><button onClick = {() => addCompany(input, params.sector)} class = "submit"> Submit </button></Link>
        </div>
    )
    } else {
        return (
        <div class = "parent">
            <Link class = "link-edit" to = {"/sector/" + params.sector + "/signedIn"}><button class = "go-back"> Go Back</button></Link>
        <h1> Edit {params.edit} </h1><br></br>
        <div class ="company-name-row">
            <h3> Company Name </h3>
            <input onChange={event => setInput(event.target.value)} class = "company-name" type="text" name="name" />   
        </div>
        <div class = "description-row">
            <h3> Description </h3>
            <input class = "description" type="text" name="name" />  
        </div>
        <br></br>
        <Link to ="/"><button onClick = {() => editCompany(params.edit, input, params.sector)} class = "submit"> Submit </button></Link>
        </div>
        )
    }
}

export default AddCompany;