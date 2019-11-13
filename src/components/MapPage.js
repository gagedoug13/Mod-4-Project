import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'


    class MapPage extends React.Component {

        render() {
            const mapStyles = {
                width: '97.8%',
                height: '40%',
              };
            return (
                    <div className="mapDiv">
                        <Map
                        google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: 47.444, lng: -122.176}}
                    />
                    </div>
                
            )
        }

    }
    // const map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8
    //   });

    // const location = props.trails.map(trail => {
    //     const array = []
    //     array.push(`{lat: ${trail.latitude}, lng: ${trail.longitude}}`)
    //     return (
    //         <div>
    //             <h1>{array}</h1>
    //         </div>
    //     )
    // }) 
    

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyB8KZZQcWwvgVaErPux7jjl1RnsVs8EuTg'
    })(MapPage)

