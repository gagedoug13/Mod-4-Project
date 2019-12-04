import React from 'react'
import {Link} from "react-router-dom";



export default function LandingPage() {
    
    return (
        <div className="landingPage">
                <form className="userForm">
                    <input className="username" type="text" placeholder="Username"></input>
                    <input className="email" type="text" placeholder="Email"></input>
                    <input className="password" type="password" placeholder="Password"></input>
                    <Link to="/main"> <button className="goToHome" >Click me to go home</button>   </Link> 
                </form>
        </div>
    )
}
