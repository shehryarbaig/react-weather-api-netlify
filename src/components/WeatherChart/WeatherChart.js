import React from 'react';
import "./WeatherChart.style.css";
import {Line} from 'react-chartjs-2';
import {getDayName} from "../../utils";

const WeatherChart = props => {

    const {data} = props;
    const daysLabel = [];
    const daysTemperature = [];
    data.map((item) => {
        daysLabel.push(getDayName(new Date(item.dt_txt).getDay()));
        daysTemperature.push(Math.floor(item.main.temp));
    })

    const state = {
        labels: daysLabel,
        datasets: [
          {
            label: 'Temperature',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: daysTemperature
          }
        ]
      }

    return (
        <div>
            <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Temperature each day',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    );
};

export default WeatherChart;