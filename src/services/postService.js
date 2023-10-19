import {axiosServices} from "./axiosServices";
import {urls} from "../constants/Urls";

const postService={
    getALL:()=>axiosServices.get(urls.posts.base),
    getById:(id)=>axiosServices.get(urls.posts.byId(id))
}
export {postService}