import React from 'react'
import FilterPage from './FilterPage'
import CardContainer from './CardContainer'
import MapPage from './MapPage'
import Body from './Body'

require('dotenv').config()

const url = `https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=200&key=${process.env.REACT_APP_BIKING_KEY}&maxResults=100`

export default class Main extends React.Component {

    state = {
      trails: [],
      searchTerm: "",
      maps: false
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
      .then(response => this.setState({
        trails: response.trails
      }))
    }

    changeMaps = () => {
      this.setState({
        maps: !this.state.maps
      })
    }

  
    render() {
      console.log(this.state.trails)
      return (
        <div className="main">
            <div className="filterPage">
                <FilterPage trails={this.state.trails}
                updateSearchTerm={this.updateSearchTerm}
                searchTerm={this.state.searchTerm}
                changeMaps={this.changeMaps}
                />
            </div>
            {this.state.maps  
            
            ?

            <div className="mapPage" > 
              <MapPage trails={this.state.trails} />
            </div>
            
            
            :
            
            <div className="card-container">
                <CardContainer trails={this.filteredTrails()}/>
            </div>

          }
          <Body />

       

        </div>
      )
    }
  }