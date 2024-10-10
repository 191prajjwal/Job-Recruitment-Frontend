import React from 'react'




function FormField({name,type,placeholder,value,onChange,label}){

    return(
       <>
        <input id={name} name={name} type={type} placeholder={placeholder} value={value}
        onChange={onChange}
        />

       { label?<label id={name} htmlFor={name}>{label}</label>:null}
       </>

    )

}




export default function Form({formFields,errorMessages,onSubmit,error}) {
  return <form onSubmit={onSubmit}>
   {
    formFields.map((field,index)=>(
<>
        <FormField key={index} name={field.name} placeholder={field?.placeholder}
        label={field?.label}
        type={field.type} 
        value={field.value}
        onChange={field.onChange}
        errorMessages={errorMessages}
        />
{/* if no error then only make api call */}
        {
            error[field.name]&&<p >{errorMessages[field.name].message}</p>
         }
 </>

    ))
   }

   <button type="submit">Submit</button>
   </form>
  
}
