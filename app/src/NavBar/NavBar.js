import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import './navbar.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";

function Login() {
    let navigate = useNavigate()
    const [ profile, setProfile ] = useState([]);
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            let auth2 = gapi.auth2.init({
                clientId: clientId,
                scope: ''
            });
            auth2.isSignedIn.listen(signInChanged);
        };
        gapi.load('auth2', initClient);
    });

    const signInChanged = () => {
        console.log("I am logged in")
        navigate('/signedIn')
    } 

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };

    return (
        <div class = "navBar">
            <img src = "./LogoMakr-6cxUMC.png" alt = "logo" class = "logo"></img>
            <h1 class ="title"> Job Search Engine </h1>
            <div class = "login">
                {profile ? (
                    <div>
                        <GoogleLogout clientId={clientId}  onLogoutSuccess={logOut} />
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
            <button class= "btn"> 
            <a href ="/"> Home </a>
            </button>
        </div>
    );
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
