"use client"

import React, { useEffect, useState } from 'react'
import { City, Cities } from "@/customTypes/datatypes"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { CrossOrigin, Icon, LatLngExpression, icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

export type MapsProps = { cities: Cities }


const CustomMap = ({cities}: MapsProps) => {

    const initPosition: LatLngExpression = [47.1480, 8.0400];

    return <>
        <div>
        <MapContainer
            center={initPosition}
            zoom={5}
            dragging={true}
            doubleClickZoom={false}
            scrollWheelZoom={true}
            attributionControl={false}
            zoomControl={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {cities.map((c, index) => (<Marker key={index} position={c.GeoLocation} /*icon={customIcon}*/></Marker>))}
                
        </MapContainer>
        </div>
    </>
}

export default CustomMap