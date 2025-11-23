import axios from "axios"
import { server_url } from "../src/services/urlService"
import { getCurrentUser } from "./common"
const instance = axios.create({
    baseURL: server_url,
    timeout: 30000,
    // withCredentials : true,
    headers: {
        token: getCurrentUser("token")
    }
});


export const Post = (method: string, body: any) => {
    return new Promise((success, fail) => {
        instance.post(method, body).then((response) => {
            success(response.data)
        }).catch((err)=>{
            fail(err?.response?.data)
        })
    })
}