import { Post } from "../../helper/axiosHelper";
import { authApi } from "./urlService";

export const loginUser = (values: any) => Post(authApi.login, { ...values });
export const signUser = (values: any) => Post(authApi.signup, { ...values });

