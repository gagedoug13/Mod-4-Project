import React from 'react'

import CardContainer from './CardContainer'
import MapPage from './MapPage'
import Media from './Media'
import {Route, Link} from "react-router-dom";
import LandingPage from './LandingPage';



require('dotenv').config()
const newsUrl = `https://newsapi.org/v2/everything?q=mountain+biking+trails+colorado&apikey=ee6b64100f3f45d7bb6c92eaa1e29969`

const url = `https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=200&key=${process.env.REACT_APP_BIKING_KEY}&maxResults=100`

export default class Main extends React.Component {

    state = {
      trails: [],
      searchTerm: "",
      news: []
    }

    filteredTrails = () => {
      return this.state.trails
      .filter(trail => {
      return (trail.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
      ) || trail.location
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
    })}

    updateSearchTerm = event => {
      this.setState({
        searchTerm: event.target.value
      })
    }
    
  
    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(response =>  this.setState({ trails: response.trails }))
      fetch(newsUrl)
        .then(response => response.json())
        .then(response => this.setState({ news: response.articles }))
      }
   

  
    render() {
      console.log(this.state.trails)
      return (
        <div className="main">
            <div>
                <div className="ulDiv">
                <ul className="ulButtons">
                    <li>
                        <Link to="/"><button className="navButtons">Go Back</button></Link>
                    </li>
                    <li>
                        <Link to="/main/media"><button className="navButtons">Media</button></Link>
                    </li>
                    <li>
                        <Link to="/main"><button className="navButtons">All Trails</button></Link>
                    </li>
                    <li>
                        <Link to="/main/maps"><button className="navButtons">Map</button></Link>
                    </li>
                </ul>
                </div>
                
                <Route exact path="/main" render={() => <CardContainer trails={this.filteredTrails()}
                                                                  searchTerm={this.state.searchTerm} 
                                                                  updateSearchTerm={this.updateSearchTerm}
                                                                /> } />
              
                <Route path="/main/media" render={() => <Media news={this.state.news} /> }/>

                <Route path="/main/maps" render={() => <MapPage  trails={this.state.trails}/>} />
               
            </div>
        </div>
      )
    }
  }