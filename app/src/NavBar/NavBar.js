import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi, loadAuth2WithProps } from 'gapi-script';
import './navbar.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate, useLocation, useParams} from "react-router-dom";

function convertToEmptyOnNull(str) {
    if (str == null || str == undefined) {
        return ""
    }
    return "signedIn"
}

function Login() {
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
            let profile = auth2.currentUser.get().getBasicProfile();
            auth2.isSignedIn.listen(signInChanged);
        };
        gapi.load('auth2', initClient);
        
});

    const signInChanged = () => {
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

    if (profile && profile.name) {
    return (
        <div class = "navBar">
            <img src = {require('../images/logo.png')} alt = "logo" class = "logo"/>
            <h1 class = "title"> Job Search Engine </h1>
            <div class = "login">
            <h3> Welcome {profile.name} </h3>
                    <div>
                        <GoogleLogout clientId={clientId} onLogoutSuccess={logOut} />
                    </div>
            </div>
            <button class= "home"> 
            <Link to ={"/" + profile.email}><img src="https://cdn-icons-png.flaticon.com/512/15/15766.png" alt = "home"/> </Link>
            </button>
        </div>
    );
} else {
    return (
        <div class = "navBar">
            <img src = {require('../images/logo.png')} alt = "logo" class = "logo"/>
            <h1 class = "title"> Job Search Engine </h1>
            <div class = "login">
                    <GoogleLogin
                        clientId={clientId}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false}
                    />
            </div>
            <button class= "home"> 
                <Link to ={"/" + convertToEmptyOnNull(profile)}> <img src="https://cdn-icons-png.flaticon.com/512/15/15766.png" alt = "home"/> </Link>
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
