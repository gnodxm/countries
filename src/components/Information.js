import Weather from "./Weather"

const Infomation = ({name, capital,area,languages, flag, latlng}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>area {area} </p>
            <h3>languages:</h3>
            <ul>
                {Object.values(languages).map(l => <li key={l}>{l}</li>)}
            </ul>
            <img src={flag} alt="flag"></img>
						<Weather lat={latlng[0]} lon={latlng[1]} />

        </div>
    )
}

export default Infomation