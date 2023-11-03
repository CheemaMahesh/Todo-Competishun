import React ,{useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthWrapper(){
    const [swap,setSwap]=useState(true);

    const handleSwap=()=>{
        setSwap(!swap);
    }
    return(
        <>
            {swap?<SignIn handleSwap={handleSwap}/>:<SignUp handleSwap={handleSwap}/>}
        </>
    )
}