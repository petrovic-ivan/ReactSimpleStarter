import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

export class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="red"></Chart>
                </td>
                <td>
                    <Chart data={pressure} color="orange"></Chart>
                </td>
                <td>
                    <Chart data={humidity} color="blue"></Chart>
                </td>
            </tr>
        );
    }

    render() {
        
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Preasure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);