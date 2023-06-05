import { useState } from "react"
import Infomation from "./Information"

const Countries = ({countries}) => {
    if (countries.length === 0) return null
    else if (countries.length > 10) {
        return <p>Two much matches, specify another filter</p>
    } return (
            <div>{countries.map(c => 
                <div key={c.name.common} >
                    <p >
                        {c.name.common} <button onClick={()=>handleClick(c)}>{!show? 'show': 'hide'}</button>
                    </p>
                    <Infomation  country={c} show={show} />
                </div>)}
                
            </div>
        )
    } else if (countries.length === 0) return null
    return (
        
    )
}

export default Countries