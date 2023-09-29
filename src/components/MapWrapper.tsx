"use client"

import dynamic from "next/dynamic";
import CustomMap, { MapsProps } from "./CustomMap";
import { FunctionComponent, useEffect, useState } from "react";

const Wrapper = ( props: MapsProps ) => {
	// this component is a workaround to prevent the Map and its dependencies to be executed on the server 

	const [Map, MapSet] = useState<FunctionComponent<MapsProps>>()
	
    useEffect(() => {
        const load = async() => {
            if(typeof global.window !== "undefined") {
                const mapComponent = (await import("./CustomMap")).default as FunctionComponent
				MapSet(() => mapComponent)
            }
        }
        load()
    }, [])

    return Map ? <Map { ...props } /> : null
}

export default Wrapper;