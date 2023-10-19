import React, {useEffect, useState} from 'react';
import {flightService} from "../../../services/flightService";
import Flight from "../Flight/Flight";

const Flights = () => {
    const[flight,setFlight]=useState([]);
    useEffect(()=>{
        flightService.getAll().then(({data})=>setFlight(data))
    },[])
    return (
        <div>
            {flight.map(flight=>(flight.launch_year!=="2020"?<Flight key={flight.id} flight={flight}/>:null))}
        </div>
    );
};

export default Flights;