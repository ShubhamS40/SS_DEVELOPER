import Footer from 'components/Footer'
import Header from 'components/Header'
import React, { useEffect,useState } from 'react'


function Wheather() {
    let [temperature, setTemperature] = useState("")
  let [humidity,setHumidity]=useState("")
  
  let [feel_like,setFeellike]=useState("")
  let [sunset,setSunset]=useState("")
  let [sunrise,setSunrise]=useState("")
  let [wind,setwindspeed]=useState("")
  let [windDeg,setWindDeg]=useState("")
  let [maxtemp,setMaxtemp]=useState("")
  let [min,setMinTemp]=useState("")
  let [country,setCountry]=useState("")
  

  const sunriseTimeMilliseconds = sunrise * 1000;
  const sunsetTimeMilliseconds = sunset * 1000;

  // Create a new Date object with the converted milliseconds
  const sunriseDate = new Date(sunriseTimeMilliseconds);
  const sunsetDate = new Date(sunsetTimeMilliseconds);

  // Format the Date object into a readable string
  const sunriseTimeString = sunriseDate.toLocaleString();
  const sunsetTimeString = sunsetDate.toLocaleString();
  const [inputValue, setInputValue] = useState('');
  const monson=(e)=>{
    setInputValue(e.target.value)

  }
  
  const handleWhetaher=()=>{
    setCountry(inputValue)
  }

  
useEffect( () => {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${country?country:"india"}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '214c442645msh072a29c9372a4c7p191ff3jsn8f51e0955617',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

      const pk=   fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${country?country:"india"}`,options)
         pk.then((data)=> { return data.json()}).then((result)=>{
          setTemperature(result.temp),
           setHumidity(result.humidity),
           setFeellike(result.feel_like),
           setMaxtemp(result.max_temp),
           setMinTemp(result.min_temp),
           setSunrise(result.sunrise),
           setSunset(result.sunset),
           setWindDeg(result.wind_degrees),
           setwindspeed(result.wind_speed)

           })
            pk.catch ((error)=>{
                console.error(error);
            }) 
            
    },[country])


    //
    return (
        <div>
            <Header />
            

            <main className='' >
                <div className='flex p-5 justify-end bg-gray-100'>
                    <div className='flex bg-gray-200 rounded-xl'>
                        <input
                        
                        onChange={monson}
                            type="text"
                            // value={searchTerm}
                            // onChange={handleChange}
                            placeholder="Search..."
                            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
                        />
                        <button onClick={handleWhetaher} type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Search</button>
                    </div>
                </div>

               <div className='text-5xl text-center'>
                <h1>WEATHER FOR :  {country?country.toLocaleUpperCase():"INDIA"}</h1>
               </div>

                <div className="grid grid-cols-3 border-2 p-10 m-10 rounded-3xl md:grid-cols-3 gap-6 text-center mb-6">
                    <div className="col">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold">Temperatures</h4>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-4xl font-bold">{`${temperature} `}<small className="text-gray-500 font-light">°C</small></h1>
                            </div>
                            <ul className="text-left mb-4">
                                <li>Temperature is {temperature}</li>
                                <li>Min Temperature is {min}</li>
                                <li>Max Temperature is {maxtemp}</li>
                                
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold">Humidity Info</h4>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-4xl font-bold">{humidity}<small className="text-gray-500 font-light">%</small></h1>
                            </div>
                            <ul className="text-left mb-4">
                                <li>Humidity is {humidity} </li>
                                <li>Feels Like {feel_like} </li>
                                <li>Wind Degree is {windDeg} </li>
                                
                            </ul>
                          
                        </div>
                    </div>
                    <div className="col">
                        <div className="bg-white rounded-lg shadow-md border-primary border-2 p-6">
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold">Wind Info</h4>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-4xl font-bold">{wind}<small className="text-gray-500 font-light">Km/Hr</small></h1>
                            </div>
                            <ul className="text-left mb-4">
                                <li>Wind Speed is {wind}</li>
                                <li>Sunrise Time {sunriseTimeString}</li>
                                <li>Sunset Time {sunsetTimeString}</li>
                                
                            </ul>
                           
                        </div>
                    </div>
                </div>

               

               
            </main>



            <Footer />
        </div>
    )
}

export default Wheather
