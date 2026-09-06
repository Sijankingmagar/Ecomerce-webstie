import {useState} from 'react'

export default function SignUp(){
  const [signForm, setSignForm] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

   function handleSubmit(e){
        e.preventDefault();
        console.log(signForm);
    
   }

  function handleChange(e){
    const {name, value} = e.target;

    setSignForm((prev)=>({
        ...prev, [name]:value
    }))

  }

    return(
        <>
        <form onSubmit={handleSubmit} className="signup-form">
    <h2>Create Account</h2>

    <input
        type="text"
        name="name"
        value={signForm.name}
        onChange={handleChange}
        placeholder="Name"
    />

    <input
        type="email"
        name="email"
        value={signForm.email}
        onChange={handleChange}
        placeholder="Email"
    />

    <input
        type="password"
        name="password"
        value={signForm.password}
        onChange={handleChange}
        placeholder="Password"
    />

    <input
        type="password"
        name="confirmPassword"
        value={signForm.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
    />

    <button type="submit">Sign Up</button>
</form>
        </>
    )
}