import { useNavigate } from "react-router-dom"

export default function Navbar(){
const isLoggedIn=localStorage.getItem("token")
const navigate = useNavigate();
function logout(){
    localStorage.removeItem("token")
    navigate("/login")
}
    return(
       <nav style={{
            display:"fixed",
            zIndex:"100"
       }}
       >Navbar
       
       {isLoggedIn?<> <p>Hello, Recruiter</p> <button onClick={logout}>Logout</button></>:<p>Not logged in</p>}
       </nav>
    )
}

//somethings are left as TODO
///make this a layout
//Add search bar filter
//Add edit and create job button