import React from 'react';
import './IndustriesGrid.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

function IndustriesGrid() {
    let params = useParams();
    let signedIn = "";
    if (params.signedIn) {
        signedIn += params.signedIn;
    }
    return (
        <div>
            <h1 class = "industries"> Find a Company By Industry </h1>
            <div class="container">
                <div class="item">
                    <img src = "https://ceblog.s3.amazonaws.com/wp-content/uploads/2012/05/20172622/ce-travel.jpg" alt = "Travel" class = "industriesImage"></img>
                    <button class="btn"><Link class = "link" to={"/sector/Travel/"+signedIn}> Travel </Link></button>
                </div>
                <div class="item">
                    <img src = "https://i.etsystatic.com/9684337/r/il/5c0f82/726795730/il_fullxfull.726795730_km9q.jpg" alt = "Food" class = "industriesImage"></img>
                    <button class="btn"><Link class = "link"to={"/sector/Food/"+signedIn}> Food </Link></button>
                </div>
                <div class="item">
                    <img src = "https://www.macquarie.com/au/en/perspectives/technology/_jcr_content/root/general_hero_copy/mobile-image.coreimg.jpeg/1660197980541/hero-technology-hub.jpeg" alt = "Technology" class = "industriesImage"></img>
                    <button class="btn"><Link class = "link" to={"/sector/Tech/"+signedIn}> Tech </Link></button>
                </div>
                <div class="item">
                    <img src = "https://media.npr.org/assets/img/2022/09/01/chart-4065756_1920-4158390aec429e495a1e65ef385b74ed5fcd4f3e-s1100-c50.jpg" alt = "Finance" class = "industriesImage"></img>
                    <button class="btn"><Link class = "link" to={"/sector/Finance/"+signedIn}> Finance </Link></button>
                </div>
                <div class="item">
                    <img src = "https://news.emory.edu/stories/2022/09/hs_ehc_epic_ehr_22-09-2022/thumbs/GettyImages-1273886987.jpg" alt = "Healthcare" class = "industriesImage"></img>
                    <button class="btn"><Link class = "link" to={"/sector/Healthcare/"+signedIn}> Healthcare </Link></button>
                </div>
                <div class="item">
                    <img src = "https://www.cubictelecom.com/wordpress/wp-content/uploads/2021/06/Reuters-car-future-_1570893193-scaled.jpg" alt = "Automotive" class = "industriesImage"></img>
                    <button class="btn"><Link class = "link" to={"/sector/Automotive/"+signedIn}> Automotive </Link></button>
                </div>
            </div>
        </div>
    )
}

export default IndustriesGrid;
