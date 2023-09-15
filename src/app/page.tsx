"use client"

import MapWrapper from "@/components/MapWrapper"
import { Cities, CitiesWithSteps, Connections } from "@/customTypes/datatypes"
import { ChangeEventHandler, useEffect, useState } from "react";
import { citiesToShow } from "@/logic/citiesToShow";

const Index = () => {
    // TODO Typecheck
    const cities: CitiesWithSteps = require("@/data/data.json");
    const [startCity, startCitySet] = useState<string>("(please choose a city)");
    const [stepNumber, stepNumberSet] = useState<number>(1);
    const [displayedCities, displayedCitiesSet] = useState<Cities>([]);

    const clickIncrease = () => stepNumberSet( (n) => n+1 );
    const clickDecrease = () => {if (stepNumber > 1) {stepNumberSet( (n) => n-1 )}};
    const onSelectChanged: ChangeEventHandler<HTMLSelectElement> = (e) => startCitySet(e.currentTarget.value);
    
    useEffect(() => displayedCitiesSet(citiesToShow(startCity, stepNumber)),
        [cities, startCity, stepNumber]);
    

    return <>
        <div><p>Starting from <b>{startCity}</b> you can go to these places in <b>{stepNumber}</b> step(s)!</p></div>
        <br />
        <div className="d-flex">
            <label htmlFor="selectStart">Where do you want to start from?</label>
            <select name="selectStart" id="selectStart" onChange={onSelectChanged}>
                <option value="">(please choose a city)</option>
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
</>}

export default Index