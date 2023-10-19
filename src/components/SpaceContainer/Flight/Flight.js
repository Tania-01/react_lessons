import React from 'react';
import style from './Flight.module.css'
const Flight = ({flight}) => {
    const{mission_name,launch_year,links}=flight
    return (
        <div>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <img className={style.flight_image} alt={"dfdk"} src={links.mission_patch}/>
        </div>
    );
};

export default Flight;