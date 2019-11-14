import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
require('dotenv').config()


    export class MapPage extends React.Component {

        hello = (url) => {
            window.location = url
        }

       
          
        displayMarkers = () => {
          return this.props.trails.map((store, index) => {
            //   console.log(store.url)
            return <Marker key={index} id={index} position={{
             lat: store.latitude,
             lng: store.longitude
           }}
           onClick={() =>  {this.hello(store.url)}} />
          })
        }
      
        render() {

            const mapStyles = {
                width: '97.8%',
                height: '60%',
              };
          return (
              <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 39.9528, lng: -105.1686}}
              >
                {this.displayMarkers()}
              </Map>
          );
        }
      }


    export default GoogleApiWrapper({
        apiKey: `${process.env.REACT_APP_MAPS_KEY}`
    })(MapPage)