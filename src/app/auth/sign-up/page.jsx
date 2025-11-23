import dynamic from "next/dynamic";
import Suspense from "../../../components/common/suspenseLoader/index"
const SignUpPage = dynamic(()=>import('../../../components/pages/signup/signup'),{ ssr : true ,loading : ()=><Suspense/>})

export default function Signup(){
    return (<SignUpPage/>)
}