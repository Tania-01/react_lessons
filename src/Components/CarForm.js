import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"


import {carValidator} from "../Validators/carValidator";
import {carsService} from "../services/carsService";
;

const CarForm = ({setTrigger,carForUpdate}) => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator),
    });


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])


    const save = async (car) => {
        console.log(car);
        await carsService.create(car);
        setTrigger(prev => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={"brand"} {...register("brand")}/>
            <input type={"text"} placeholder={"price"} {...register("price")}/>
            <input type={"text"} placeholder={"year"} {...register("year")}/>
            <button>save</button>
        </form>
    );
};

export default CarForm;