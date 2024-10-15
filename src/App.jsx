import "./App.css";
import { AddJob,EditJob,JobDetails,JobList,Signup,Login,Notfound } from "./pages/pages";
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (

    <BrowserRouter>
    <Routes>
  
      <Route path="/" element={<JobList/>}/>
      <Route path="/addjob" element={<AddJob/>}/>
      <Route path="/editjob" element={<EditJob/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="list/:id" element ={<JobDetails/>}/>
      {/* make it nested when doing navbar */}
      <Route path="/list" element={<JobList/>}> 
        <Route index element={<JobList/>}/>
        
      </Route>
      <Route path="*" element={<Notfound/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
