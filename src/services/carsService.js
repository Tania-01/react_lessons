import {axiosService} from "./axiosService";
import {urls} from "../Constsnts/Urls";



const carsService={
    getAll:()=>axiosService.get(urls.cars.base),
    create: (data) => axiosService.post(urls.cars.base, data),
    updateById:(id,data)=>axiosService.put(urls.cars.byId(id),data),
    deleteByID:(id)=>axiosService.delete(urls.cars.byId(id))
}


export {carsService}