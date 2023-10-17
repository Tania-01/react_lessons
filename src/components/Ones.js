import React from 'react';

import One from "./One";
let rick=[
    {
        id:1,
        status: "Alive",
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
        id:2,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
        id:3,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
        id:4,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
        id:5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    },

    {
        id:6,
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
    }

]
const Ones = () => {
    return (
        <div>
            {rick.map(value => <One key={value.id} item={value}/>)}
        </div>
    );
};

export default Ones;