import React from 'react';

import One from "./One";
let rick=[
    {
        status: "Alive",
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {name: "Beth Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    },
    {
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
            {rick.map(value => <One item={value}/>)}
        </div>
    );
};

export default Ones;