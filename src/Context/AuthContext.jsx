import React from "react";

export const AuthContext=React.createContext()

export const AuthProvider =({children})=>{
    let [auth,setAuth]=React.useState(false)
    let [token,setToken]=React.useState("")
    let isAuth=()=>{
       
            return auth
    }
    let toggleAuth=()=>{
           if(!auth)
           {
            fetch(`https://reqres.in/api/login`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({"email": "eve.holt@reqres.in","password": "cityslicka"})
            }).then((resp)=>(resp.json())).then((resp)=>{
               setToken(resp.token)
            })
            setAuth(!auth) 
           }
           else{
            setAuth(!auth) 
           }
         
           
    }
    return <AuthContext.Provider value={{isAuth,toggleAuth,token}}>{children}</AuthContext.Provider>
}