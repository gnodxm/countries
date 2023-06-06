import { useState, useEffect } from "react";
import axios from "axios";

import Display from "./components/Display";

function App() {
  const [findValue, setFindValue] = useState('')
  const [countries, setCountries] = useState([])
  useEffect(() => {
    if (findValue) {
      axios
      .get(`https://restcountries.com/v3.1/name/${findValue}`)
      .then(response => setCountries(response.data))
      .catch(() => setCountries([]))
    } 
    },[findValue])
  
  return (
    <div>
      <div>
        find countries  <input value={findValue} onChange={(event) => {
          setFindValue(event.target.value)
        }} />
      </div>
			<Display countries={countries} />
      
      
    </div>
  );
}

export default App;
