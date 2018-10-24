import React, { Component } from 'react';
import '../../index.css';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        return (
            <div class="container__map">
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map;