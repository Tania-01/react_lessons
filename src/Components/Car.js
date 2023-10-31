import React from 'react';

const Car = ({car,setCarForUpdate}) => {
    const {id,brand,price,year}=car
    return (
        <div>
            <p>id:{id}</p>
            <p>brand:{brand}</p>
            <p>price:{price}</p>
            <p>year:{year}</p>
            <button onClick={()=>setCarForUpdate(car)}>updata</button>
            <button>dalete</button>
        </div>
    );
};

export default Car;