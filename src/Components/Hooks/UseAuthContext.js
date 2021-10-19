import { useContext } from "react"
import  { AuthContext } from "../Context/AuthProvider"

 const UseAuthContext = () => {
    //  using context 
     return useContext(AuthContext)
 } 
 export default UseAuthContext