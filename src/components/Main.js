import React from 'react'
import FilterPage from './FilterPage'
import CardContainer from './CardContainer'
import MapPage from './MapPage'
const url = 'https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=150&key=200636112-39345bcf829aba700988ea1d9f5718ab&maxResults=100'

export default class Main extends React.Component {

    state = {
      trails: [],
      searchTerm: ""
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

    
    
    
  
    render() {
      // console.log(this.state.trails)
      return (
        <div className="main">
            <div className="filterPage">
                <FilterPage trails={this.state.trails} updateSearchTerm={this.updateSearchTerm} searchTerm={this.state.searchTerm}/>
            </div>
            <div className="card-container">
                <CardContainer trails={this.filteredTrails()}/>
            </div>
            <div className="map-page">
                <MapPage />
            </div>
        </div>
      )
    }
  }