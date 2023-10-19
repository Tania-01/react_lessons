import {axiosService} from "./axiosServices";
import {urls} from "../constants/Urls";

const  flightService={
    getAll:()=>axiosService.get(urls.flights.base)
}
export {flightService}