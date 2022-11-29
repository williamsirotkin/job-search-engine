import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi, loadAuth2WithProps } from 'gapi-script';
import './navbar.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate, useLocation, useParams} from "react-router-dom";
import axios from 'axios';

function convertToEmptyOnNull(str) {
    if (str == null || str == undefined) {
        return ""
    }
    return str.email
}

function Login(props) {
    let params = useParams();
    const location = useLocation();
    let navigate = useNavigate()
    const [ profile, setProfile ] = useState([]);
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            let auth2 = gapi.auth2.init({
                clientId: clientId,
                scope: ''
            });
            if (profile && profile.email) {
                console.log("got the email: " + profile.email)
                axios({
                    url: "http://localhost:3001/get", 
                    data: {"email": profile.email},
                    method: "post"
                })
                .then((response => {
                    console.log(response.data);
                    let companyArr = []
                    for (let i = 0; i < response.data.length; i++) {
                        companyArr.push(response.data[i].company)
                    }
                    console.log("companyArr" + companyArr)
                    props.getCompanies(companyArr)
                }))
                .catch((error) => {
                    console.log("ERROR" + error);
                });
            } else if (profile) {
                logOut()
            }
            auth2.isSignedIn.listen(signInChanged);
        };

        gapi.load('auth2', initClient);
        
});

    const signInChanged = () => {
        /*
        if ((profile && !profile.name) || !profile) {
            navigate('/')
        } else {
            navigate('/signedIn')
        }
        */
    } 

    const onSuccess = (res) => {
        setProfile(res.profileObj);
        navigate("/" + res.profileObj.email)
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(undefined);
        console.log("I should be logged out ")
        navigate("/")
    };

    if (profile && !profile.name) {
        logOut()
    } 


    if (profile && profile.name){
        return (
        <div class = "navBar">
            <img src = {require('../images/logo.png')} alt = "logo" class = "logo"/>
            <div></div>
            <h1 class = "title"> Job Search Engine </h1>
            <h3> Welcome {profile.name.substring(0, profile.name.indexOf(" "))} </h3>
            <div>
                <Link to = "/" class = "login">
                        <div>
                            <GoogleLogout to = "/" clientId={clientId} onLogoutSuccess={logOut} />
                        </div>
                </Link>
            </div>
            <button class= "home"> 
                <Link to ={"/" + profile.email}><img src="https://cdn-icons-png.flaticon.com/512/15/15766.png" alt = "home"/> </Link>
            </button>
        </div>
        )
} else {
    return (
        <div class = "navBar">
            <img src = {require('../images/logo.png')} alt = "logo" class = "logo"/>
            <div></div>
            <h1 class = "title">Job Search Engine</h1>
            <div></div>
            <div>
                <Link to = "/" class = "login">
                    <GoogleLogin
                        clientId={clientId}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false}
                    />
                </Link>
            </div>
            <button class= "home"> 
                <Link to ={"/" + convertToEmptyOnNull(profile)}> <img src="https://cdn-icons-png.flaticon.com/512/15/15766.png"alt = "home"/> </Link>
            </button>
        </div>
    );
}
}

export default Login;


/*export default function NavBar () {
 return (   
   <div>
      <nav>
         <img src = "https://m.media-amazon.com/images/I/71LlIjFN2GL.jpg" alt = "Bulldog Logo"></img>
      </nav>
    </div>
 )   
}
"76d9oeppf6900mvs463vp9asnt.apps.googleusercontent.com"*/
