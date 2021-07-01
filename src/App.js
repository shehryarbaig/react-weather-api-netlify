import './App.css';
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import {useState} from "react"
import {APP_ID} from "./config";
import {useFetch} from "./utils";

function App() {
  const [weatherData, setWeatherData] = useState();  

  const FetchWeatherData = async (searchQuery) =>{
    const data = await useFetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&units=metric&appid=${APP_ID}`);

    if (data.error === null) {
      setWeatherData(data.response)
    }
  }

  const  handleCLick = (searchQuery)=>{
    FetchWeatherData(searchQuery);
  };

  return (
    <div className="App">
      <div className="searchSection">
        <SearchBar onClick={handleCLick} placeholder="Enter City Name"/>
      </div>
      <div className="weatherCardSection">
        {weatherData ? (weatherData.cod==="200" ? <WeatherCard weatherData = {weatherData}/> : <div>Result Not Found</div>):<div/> }

      </div>
    </div>
  );
}

export default App
