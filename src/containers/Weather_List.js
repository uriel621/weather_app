import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Google_map from '../components/Google_map';

// import { fetch_weather } from '../actions/index';

class Weather_List extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            term: ''
        }
        this.render_weather = this.render_weather.bind(this)
        this.print_rows = this.print_rows.bind(this)
    }
    render_weather(city_data) {
        const name = city_data.city.name;
        const temps = city_data.list.map(weather => weather.main.temp);
        const pressures = city_data.list.map(weather => weather.main.pressure);
        const humidities = city_data.list.map(weather => weather.main.humidity);
        const lon = city_data.city.coord.lon;
        const lat = city_data.city.coord.lat;
        // console.log(temps)
        return (
            <tr key = { name } style = {{ height: '120px', width: '180px' }}>
                <td><Google_map lon = { lon } lat = { lat } /></td>
                <td><Chart data = { temps } color = 'orange' units = 'K' /></td>
                <td><Chart data = { pressures } color = 'green' units = 'hPa' /></td>
                <td><Chart data = { humidities } color = 'blue' units = '%' /></td>
            </tr>
        )
    }

    print_rows() {
        return this.props.weather.map(this.render_weather)
    }

    render(){
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperatures (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                   { this.print_rows() }
                </tbody>
            </table>
        )
    }
}

// NOR THIS
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetch_weather }, dispatch);
// }
//export default connect(null, mapDispatchToProps)(Weather_List);

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(Weather_List);