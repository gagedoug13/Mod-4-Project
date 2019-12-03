import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Main from './Main'



export default function LandingPage() {
    
    
    
    return (
        <div className="landingPage">
                <form className="userForm">
                    <input className="username" type="text" placeholder="username"></input>
                    <input className="email" type="text" placeholder="email"></input>
                    <Link to="/main"> <button className="goToHome" >Click me to go home</button>   </Link> 
                </form>
        </div>
    )
}
