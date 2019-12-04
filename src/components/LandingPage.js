import React from 'react'
import {Link} from "react-router-dom";



export default function LandingPage() {
    
    return (
        <div className="landingPageHeader">
        <h1 className="welcome">Welcome To My Line</h1>
        <div className="landingPage">
                <form className="userForm">
                    <h1>Sign Up!</h1>
                    <input className="username" type="text" placeholder="Username"></input>
                    <input className="email" type="text" placeholder="Email"></input>
                    <input className="password" type="password" placeholder="Password"></input>
                    <Link to="/main"> <button className="goToHome">Enter My Line</button>   </Link> 
                </form>
        </div>
        </div>
    )
}
