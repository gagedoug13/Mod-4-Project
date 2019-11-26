import React from 'react'


export default function LandingPage(props) {
    
    return (
        <div className="landingPage">

                <form className="userForm">
                    <input className="username" type="text" placeholder="username"></input>
                    <input className="email" type="text" placeholder="email"></input>
                    <button className="goToHome" onClick={() => props.change()}>click me to go to home</button>
                </form>
           
        </div>
    )
}
