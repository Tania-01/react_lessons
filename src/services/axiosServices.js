import axios from "axios";
import {baseURL, flightURL} from "../constants/Urls";


const axiosServices=axios.create({baseURL})
const  axiosService=axios.create({baseURL:flightURL})

export {axiosServices,axiosService}