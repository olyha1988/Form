import axios from  "axios";
import { useEffect, useState, } from "react";

const ApiCallWithAxios=()=>{
const [userState, setUserState] = useState([]);

useEffect(()=>{

const getUsefetch=async()=>{
const data=await axios.get("https://dummyjson.com/products")
setUserState(data)
console.log(data)
}
getUsefetch()
},[])

return(<div>

<h1>This is Fetch  API</h1>

</div>)
}
export default ApiCallWithAxios