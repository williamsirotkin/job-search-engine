import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi, loadAuth2WithProps } from 'gapi-script';
import './navbar.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate, useLocation, useParams} from "react-router-dom";

function Login() {
    let params = useParams();
    const location = useLocation();
    let navigate = useNavigate()
    let email = ""
    const [ profile, setProfile ] = useState([]);
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            let auth2 = gapi.auth2.init({
                clientId: clientId,
                scope: ''
            });
            let profile = auth2.currentUser.get().getBasicProfile();
            auth2.isSignedIn.listen(signInChanged);
        };
        gapi.load('auth2', initClient);
        
});

    const signInChanged = () => {
        console.log("I am logged in" + email)
        navigate("/signedIn");
    } 

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
        navigate('/')
    };

    if (profile) {
    return (
        <div class = "navBar">
            <img src = {require('../images/logo.png')} alt = "logo" class = "logo"/>
            <h1 class = "title"> Job Search Engine </h1>
            <div class = "login">
            <h3 class = ""> Welcome {profile.name} </h3>
                {profile ? (
                    <div>
                        <GoogleLogout clientId={clientId} onLogoutSuccess={logOut} />
                    </div>
                ) : (
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                )}
            </div>
            <button class= "home"> 
            <a href ="/"> Home </a>
            </button>
        </div>
    );
} else {
    return (
        <div class = "navBar">
            <img src = {require('../images/logo.png')} alt = "logo" class = "logo"/>
            <h1 class = "title"> Job Search Engine </h1>
            <div class = "login">
                {profile ? (
                    <div>
                        <GoogleLogout clientId={clientId} onLogoutSuccess={logOut} />
                    </div>
                ) : (
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                )}
            </div>
            <button class= "home"> 
            <a href ="/"> Home </a>
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
