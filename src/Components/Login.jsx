
import {useState} from 'react'

export default function Login(){
const [formData, setFormdata] = useState({
    email:'',
    password:''
}); 

  function handleChange(e){
    const {name, value} = e.target;

    setFormdata((prev)=>({
    ...prev, 
    [name]:value
  }))
  }
    return(
  <>
  <input 
  type ="email"
  name = "email"
  value = {formData.email}
  onChange={handleChange}
  placeholder="Email"
  />

  <input 
  type = "password"
  name = "password"
  value = {formData.passsword}
  onChange={handleChange}
  placeholder="password"
  />
  </>
    )
}