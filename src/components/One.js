import React from 'react';

const One = ({item}) => {
    console.log(item)

    const{name,status,species,gender,image}=item
    return (
        <div>

            <h1>{name}</h1>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image}/>
        </div>
    );
};

export default One;