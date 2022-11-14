import React from 'react';
import { useState } from 'react';
import "./JobPage.css"
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

function JobComponent() {
    return (
        <div>
            <a href = "https://careers.homedepot.com/job/17034825/software-engineer-ii-remote-atlanta-ga/"> Software Engineer II</a>
            <h3>The Software Engineer II is responsible for independently developing and assisting in the design of a product that our customers and associates love. As a Software Engineer II, you will be part of a dynamic team with engineers of all experience levels who help each other build and grow technical and leadership skills while creating, deploying, and supporting production applications. In addition, Software Engineer IIs may be involved in configuration, security, resilience, performance tuning and production monitoring.</h3>
        </div>
    )
}

function JobPage() {
    return (
        <div>
            <button class = "jobReturnToHome"> <Link class = "link" to="/sector"> Go Back </Link></button>
            <div class = "header">
                <h1> Jobs At The Hope Depot </h1>
            </div>
            <div>
                <JobComponent/>
                <JobComponent/>
                <JobComponent/>
            </div>
        </div>
    )
}

export default JobPage;
