import React from 'react';

class Google_map extends React.Component {
    componentDidMount() {
        // second parameter optional
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    // this.refs.map
    render(){
        return (
            <div style={{ height: '120px', width: '180px' }}  ref='map'></div>
        )
    }
}

export default Google_map;