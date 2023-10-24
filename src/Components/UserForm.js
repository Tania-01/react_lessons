import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../services/usersService";


const UserForm = ({setUsers}) => {
    const {reset,handleSubmit,register}=useForm()

    const save = async (users) => {

        const {data} = await usersService.create(users)
       setUsers(prev=>[...prev,data])
    };
    return (
        <form onSubmit={handleSubmit(save)}>
<input placeholder={'name'} {...register('name')}/>
            <input placeholder={'username'} {...register('username')}/>
            <button>save</button>

        </form>
    );
};

export default UserForm;