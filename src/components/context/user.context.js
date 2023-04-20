import { createContext, useState } from "react";

export const UserContext =createContext({ 
    currentUser: ['default name' , 'default value'],
    setcurrentUser: ()=>null,
})

export const UserProvider =({children})=>{
    const [currentUser, setcurrentUser] = useState([]);
    const value ={currentUser,setcurrentUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

