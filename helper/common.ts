export const getCurrentUser = (key:string)=> {
    if(typeof window == "undefined") return 
    let user = JSON.parse(window?.global?.localStorage.getItem("authUser") || "{}" );
    if(!user) return {}
    if(key)return user[key]
    return user
}

export const setCurrentUser = (data:any) =>{
    if(typeof window == "undefined") return 
    window?.global?.localStorage.setItem("authUser",data);
}