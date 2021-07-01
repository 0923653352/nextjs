import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Hero2 extends Component {
	render() {
		return (
			
			<div style={{ width: '100%', height: '250px', position: 'relative' }}>
				<Map google={this.props.google} zoom={14}>
					<Marker onClick={this.onMarkerClick} name={'Current location'} />
					<InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
				</Map>
			</div>
		);
	}
}
export default GoogleApiWrapper({
	apiKey: 'AIzaSyA-NoP20OejFNd_gxMizvmRCDHwRPg0gJI&callback',
})(Hero2);
