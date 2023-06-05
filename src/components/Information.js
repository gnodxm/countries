const Infomation = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area} </p>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
            </ul>
            <img src={country.flags.png}></img>
        </div>
    )
}

export default Infomation