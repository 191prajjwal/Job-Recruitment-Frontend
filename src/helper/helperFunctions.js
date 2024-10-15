import {decodeToken} from 'react-jwt'


export function addTokenToHeader({headers}){
    const token=localStorage.getItem("token")
if(token)
{
    headers.Authorization=`${token}`
}
  return headers
}


export function handleResponse(res){
switch(res.status)
{
  case 401:
    localStorage.removeItem("token")
    alert("You are logged out")
    window.location.href="/login"
    //we cant use useNavigate here as this is not a react component and it is just a normal function
    //going to login page and will refresh the whole page to clear the data stored
  return null
 

  case 400:
    alert("Invalid email or password")
   return null

    case 201:
    alert("User Registered successfully")
     window.location.href="/login"

    return res.data
   

    case 200:
    window.location.href="/"
    return res.data
 

    case 500:
      alert("something went wrong")
      return null
    
  

  default:
    alert("something went wrong")
    break;
  
}
}

export function isEditable(id){
  const token=localStorage.getItem("token");
  if(token)
 {
  const decoded=decodeToken(token);
  return decoded.id===id;
 
 }
}