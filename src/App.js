import React from 'react'
import Main from './components/Main'
import './App.css'



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome To My Line</h1>
        </div>
        <Main />
      </div>
    )
  }
}


