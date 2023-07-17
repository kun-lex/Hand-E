import axios from 'axios';
import { useEffect, useState } from 'react';

const API_key ='abb92a293ca196d46175f4ea35e1a78e';
const API_endpoint ='https://api.openweathermap.org/data/2.5/weather?';

const GeoLocation = () => {
    const [lat, setLat ] = useState('');
    const [lon, setLon] = useState('');
    const [responseData, setResponseData] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude)
        })
        // console.log(`${API_endpoint}lat=${lat}&lon=${lon}&exculde=hourly,daily&appid=${API_key}`)
        let finalAPIEndPonit =`${API_endpoint}lat=${lat}&lon=${lon}&exculde=hourly,daily&appid=${API_key}`
        axios.get(finalAPIEndPonit)
        .then((response) => {
            setResponseData(response.data)
        })
    })
    return(
        <div>
            <h1>{responseData.name}</h1>
        </div>
    )
}
export default GeoLocation;