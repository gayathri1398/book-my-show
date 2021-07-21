import React from 'react'

const CastandCrew = (props) => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 ">
                    <img src={props.image} 
                    alt="Batman"
                    className="w-full h-full rounded-full" />
                </div>
                <h1>{props.name}</h1>
                <p>as {props.role}</p>
            </div>
        </>
    )
}

export default CastandCrew;

