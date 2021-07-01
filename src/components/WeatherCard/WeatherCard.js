import "./WeatherCard.style.css";
import { getDayName } from "../../utils";
import WeatherTile from "../WeatherTile";
import WeatherChart from "../WeatherChart";



const WeatherCard = props => {
    const { weatherData } = props;
    const { list } = props.weatherData;
    const currentWeatherDetail = list[0];
    const day = getDayName(new Date(currentWeatherDetail.dt_txt).getDay());
    const skyDescription = currentWeatherDetail.weather[0].main;

    let date = [];
    const currentDateHours = new Date(currentWeatherDetail.dt_txt).getHours();
    const result = list.filter(obj => {
        const nextDate = new Date(obj.dt_txt).getDate();
        const nextDateHours = new Date(obj.dt_txt).getHours();
        if (!date.includes(nextDate) && currentDateHours == nextDateHours) {
            date.push(nextDate);
            return true;
        }
        return false;
    });
    return (
        <div className="weatherCardContainer">
            <div>
                <h3 className="weatherCardHeaderText">{weatherData.city.name}, {weatherData.city.country}</h3>
                <h4 className="weatherCardHeaderText">{day}</h4>
                <h5 className="weatherCardHeaderText">{skyDescription}</h5>

            </div>
            <div class="currentWeatherContainer">
                <div class="temperatureSection">
                    <img className="avatar" alt="weather" src={`http://openweathermap.org/img/w/${currentWeatherDetail.weather[0].icon}.png`} />
                    <h3 className="custom-h3">{Math.floor(currentWeatherDetail.main.temp)}</h3>
                    <h4 className="degrees-h4">°C</h4>
                </div>
                <div class="detailSection">
                    <p className="temperatureDetails">Pressure: {currentWeatherDetail.main.pressure} hPa</p>
                    <p className="temperatureDetails">Humidity: {currentWeatherDetail.main.humidity}%</p>
                    <p className="temperatureDetails">Wind Speed: {currentWeatherDetail.wind.speed} m/s</p>
                </div>
            </div>
            <hr />
            <div className="temperatureForcastContainer">
                {result.map((item) => {
                    return (
                        <WeatherTile data={item} />
                    )
                })}
            </div>
            <hr />
            <div>
                <WeatherChart data={result} />
            </div>
        </div>
    );
};

export default WeatherCard;