import axios from "axios";

import {baseURL} from "../Constsnts/Urls";


const axiosService=axios.create({baseURL:baseURL})

export {axiosService}