import React from 'react'
import getAllJobs from '../../services/job'

import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { isEditable } from '../../helper/helperFunctions';
import Navbar from '../../components/Navbar';

export default function JobList() {

  const [jobs,setjobs]=useState([]);
  const[isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
  
    getAllJobs().then(res=>{
     console.log("res",res.data)
      setjobs(res.data);
      setIsLoading(false)
    })
  },[])

  const navigate=useNavigate()


  function routeToJobDetail(id){
    navigate(`/list/${id}`)
  }

  

 


  return (
    <div>
      <Navbar/>
      <p>Job List</p>
      {isLoading?<p>Loading...</p>:jobs.map((job,index)=>< div key ={index}  > 
        <p>{job.salary}k/month</p>
        <p>{job.name}</p>
        <div>
          <h3>Skills</h3>
          <p>{job.skills.map((skill,index)=><span style={{display:"block"}} key={index}>{skill}</span>)}</p>
        </div>
        <p>location: {job.location}</p>
        {job._id &&<button onClick={()=>routeToJobDetail(job._id)}>View details</button>}

        {
          isEditable(job.creator) &&<button>Edit</button>
        }
      </div>)}
    </div>
  )
}
