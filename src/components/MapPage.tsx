"use client"

import { Cities, CitiesWithSteps } from "@/customTypes/datatypes";
import { citiesToShow } from "@/logic/citiesToShow";
import { useState, ChangeEventHandler, useEffect } from "react";
import MapWrapper from "./MapWrapper";


const MapPage = ({
    cities,
}: {
    cities: CitiesWithSteps
}) => {

    if(!cities) { throw new Error("cities undefined"); }

    const initalStartCity = cities[0].Name;
    const initialStepNumber = 1;

    const [startCity, startCitySet] = useState<string>(initalStartCity);
    const [stepNumber, stepNumberSet] = useState<number>(initialStepNumber);
    const [displayedCities, displayedCitiesSet] = useState<Cities>([]);

    const clickIncrease = () => stepNumberSet( (n) => n+1 );
    const clickDecrease = () => {if (stepNumber > 1) {stepNumberSet( (n) => n-1 )}};
    const onSelectChanged: ChangeEventHandler<HTMLSelectElement> = (e) => startCitySet(e.currentTarget.value);
    
    useEffect(() =>
        displayedCitiesSet(citiesToShow(startCity, stepNumber, cities)),
        [cities, startCity, stepNumber]
    );

    return <>
        <div><p>Starting from <b>{startCity}</b> you can go to these places in <b>{stepNumber}</b> step(s)!</p></div>
        <br />
        <div className="d-flex">
            <label htmlFor="selectStart">Where do you want to start from?</label>
            <select name="selectStart" id="selectStart" onChange={onSelectChanged}>
                {cities.map((city) => <option
                    key={city.Name}
                    value={city.Name}
                    >{city.Name}</option>)}
            </select>
        </div>
        <br />
        <div className="d-flex">
            <button onClick={clickDecrease}>decrease stepnumber</button>
            <button onClick={clickIncrease}>increase stepnumber</button>
        </div>
        <div className="mapwrapper">       
            <MapWrapper cities={displayedCities}/>
        </div>
    </>
};

export default MapPage;