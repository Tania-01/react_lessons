import React from 'react';

const User = ({item}) => {
    const{name, surname, age,info,photo}=item


    return (
        <div>
            <h2>{name}{surname}</h2>
            <p>{age}</p>
            <p>{info}</p>
            <img src={photo}/>
        </div>
    );
};

export default User;
