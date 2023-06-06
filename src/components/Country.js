import { useState } from "react"
import Infomation from "./Information"
const Country = ({country}) => {
	const [show, setShow] = useState(false)
	return (
		<div>
			<p>{country.name.common} <button onClick={()=>setShow(!show)}>{!show?'show':'hide'}</button></p>
			{show
				?<Infomation 
						name={country.name.common} 
						capital={country.capital}
						area={country.area}
						languages={country.languages}
						flag={country.flags.png}
						latlng={country.capitalInfo.latlng}
					/>
				:null
			}
		</div>
	)
}

export default Country