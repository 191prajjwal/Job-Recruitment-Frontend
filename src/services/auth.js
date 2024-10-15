import axios from 'axios'
import { handleResponse } from '../helper/helperFunctions';
const URL =import.meta.env.VITE_BASE_URL

export const signup= async(data)=>{
const res= await axios.post(`${URL}/api/v1/user/signup`,data,{
    headers:{
        'Content-Type':"application/x-www-form-urlencoded"
    }
});

return handleResponse(res)
}



export const login= async(data)=>{
    const res= axios.post(`${URL}/api/v1/user/login`,data,{
        headers:{
            'Content-Type':"application/x-www-form-urlencoded"
        }
    });
   
    return res;
    }

