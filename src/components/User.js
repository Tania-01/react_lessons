import React from 'react';

const User = ({item}) => {
    const{name,surname,age,info,photo}=item

    return (
        <div>
<h1>{name} {surname}</h1>
            <p>{age}</p>
            <p>{info}</p>
            <img src={photo} alt="user"/>
        </div>
    );

};

export default User;
