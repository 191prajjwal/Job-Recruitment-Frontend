import {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchJobById } from '../../services/job';
import { isEditable } from '../../helper/helperFunctions';


export default function JobDetails() {
  const params=useParams();
  const[job,setJob]=useState(null)
  const[isLoading,setIsLoading]=useState(true)
  const[isError,setIsError]=useState(false)
  const canEdit= job === null ? false : isEditable(job?.creator)

  const navigate =useNavigate()



useEffect(()=>{
  setIsLoading(true)
  fetchJobById(params.id).then(res=>{
    setJob(res.data)
  }).catch(()=>{
    setIsError(true)
  })
  .finally(()=>{
    setIsLoading(false)
  })
  
},[params.id])

  return (
    <>
    <p>Job Detail</p>
    {isLoading?<p>Loading...</p>:isError?<p>Something went wrong</p>:<p>{job.name}</p>}
    {
          canEdit &&<button onClick={()=>{navigate("/editjob")}}>Edit</button>
        }
    </>
  )
}
