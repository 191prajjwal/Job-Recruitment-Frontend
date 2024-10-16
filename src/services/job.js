import axios from "axios"
const URL= import.meta.env.VITE_BASE_URL
import { addTokenToHeader } from '../helper/helperFunctions';


export default async function getAllJobs(){
    const headers= addTokenToHeader({headers:{}})
    const res= await axios.get(`${URL}/api/v1/job`,{
        headers
    })

    if(res.status===401)
    {
        localStorage.removeItem("token")
        alert("You are logged out")
        window.location.href="/login"  
      }

    return res

}


export function fetchJobById(id){

    const headers= addTokenToHeader({headers:{}})
    const res= axios.get(`${URL}/api/v1/job/${id}`,{
        headers
    })
    return res

}



export function addJob(data){
    const headers=addTokenToHeader({headers:{}})
    const res=axios.post(`${URL}/api/v1/job`,data,{
        headers
    });
    return res
}