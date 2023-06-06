// import { useState } from "react"
import Information from "./Information"
import Country from "./Country"

const Display = ({countries}) => {
    if (countries.length === 0) return null
    else if (countries.length === 1) {
			return <Information 
								name={countries[0].name.common} 
								capital={countries[0].capital}
								area={countries[0].area}
								languages={countries[0].languages}
								flag={countries[0].flags.png}
								latlng={countries[0].capitalInfo.latlng}

						 />
		}	else if (countries.length > 10) {
      return <p>Two much matches, specify another filter</p>
    }
		return (
        <div>
				{countries.map(c => <Country key={c.name.common} country={c}/> )}
				</div>
        )
       
    
}

export default Display;