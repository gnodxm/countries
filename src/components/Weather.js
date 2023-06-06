import { useState,useEffect } from "react"
import axios from "axios"
const api_key = process.env.REACT_APP_API_KEY

const Weather = ({lat, lon}) => {
	const [weather, setWeather] = useState({})
	const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
	useEffect(()=> {
		axios
		.get(api_url)
		.then(response => {
			console.log(response.data);
			setWeather(response.data);
		})
		.catch(()=>console.log(api_url))
	},[api_url])
	
	return (
		<div>
			love
		</div>
	)
}

export default Weather