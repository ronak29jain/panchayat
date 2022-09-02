import React, { useState, useEffect } from 'react'
import './Widgets.css';
import axios from 'axios';

function Widgets() {

  const [data, setData] = useState({})
  const [defdata, setDefdata] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`

  const searchLocation = (event) => {
    if (event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }
  
  useEffect(() => {
    const defweatherdata = () => {
      const defaulturl = `https://api.openweathermap.org/data/2.5/weather?q=Gwalior&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      axios.get(defaulturl).then((response) => {
        setDefdata(response.data);
      })
    }
    defweatherdata();
  },[])

  return (
    <div className='widgets'>
      <div className="container">
        <div className="searchbox">
          <input 
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text"
          />
        </div>
        <div className="top">
          <div className="location">
            {defdata.name ? (data.name ? <p>{data.name}</p> : <p>{defdata.name}</p>) : null}
          </div>
          <div className="temp">
            {defdata.main ?  (data.main ? <h1>{data.main.temp}°C</h1> : <h1>{defdata.main.temp}°C</h1>) : null}
          </div>
          <div className="discription">
            {defdata.weather ?  (data.weather ? <p>{data.weather[0].main}</p> : <p>{defdata.weather[0].main}</p>) : null}
          </div>
        </div>
        <div className="bottom">
          <div className="humidity">
            {defdata.main ? (data.main ? <p className='bold'>{data.main.humidity}%</p> : <p className='bold'>{defdata.main.humidity}%</p>) : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {defdata.wind ? (data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : <p className='bold'>{defdata.wind.speed} MPH</p>) : null}
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widgets