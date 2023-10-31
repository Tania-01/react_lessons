import React, {useEffect, useState} from 'react';


import {carsService} from "../services/carsService";


import CarForm from "./CarForm";
import Cars from "./Cars";

const CarsConteiner = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(true)
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(()=>{
        carsService.getAll().then(({data}) => setCars(data))
    }, [trigger])


    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default CarsConteiner;