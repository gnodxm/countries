import { useState, useEffect } from "react";
import axios from "axios";

import Countries from "./components/Countries";
import Infomation from "./components/Information";

function App() {
  const [findValue, setFindValue] = useState('')
  const [countries, setCountries] = useState([])
  useEffect(() => {
    if (findValue) {
      axios
      .get(`https://restcountries.com/v3.1/name/${findValue}`)
      .then(response => setCountries(response.data))
      .catch(error => setCountries([]))
    } setCountries([])
    },[findValue])
  
  return (
    <div>
      <div>
        find countries  <input value={findValue} onChange={(event) => {
          setFindValue(event.target.value)
        }} />
      </div>
      {countries.length===1
        ? <Infomation />
        : <Countries countries={countries} />}
      
      
    </div>
  );
}

export default App;
