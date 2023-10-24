import {axiosService} from "./axiosService";
import {urls} from "../Constsnts/Urls";



const usersService={
    getAll:()=>axiosService.get(urls.users),
    create:(user)=>axiosService.post(urls.users,user)
}


export {usersService}