import React, {useEffect, useState} from 'react';
import {usersService} from "../services/usersService";


import Users from "./Users";
import UserForm from "./UserForm";





const UsersComponents = () => {


    const [users, setUsers] = useState([])


    useEffect(() => {
        usersService.getAll().then(({data})=>setUsers(data))
    }, [])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UsersComponents;