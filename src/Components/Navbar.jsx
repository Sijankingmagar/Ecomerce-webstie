import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

export default function Navbar(){
   const [input, setInput] = useState("");

   const Navigate = useNavigate();

   function handleClick(){
    Navigate(`/?q=${input}`);
    setInput("");
   }
   function handleSignUp(){
    Navigate(`/SignUpPath`)
   }
   function handleLogIn(){
    Navigate(`/LogInPath`)
   }

    return(
        <div style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000, 
  backgroundColor: '#your-color'
}}>
        <div style= {{backgroundColor:'green', display:'flex', justifyContent:'center', gap:'20px',padding:'10px', height:'50px',position:'fixed', width:'100%', top:'0'}}>
        <h1 style={{margin: 0, marginRight: '80px', fontSize: '24px', color: 'white'}}>EComerce</h1>
        <input placeholder="Search products" value = {input} onChange= {(e)=>setInput(e.target.value)} style={{width:'300px', padding:'10px'}}/>
        <button onClick={handleClick}>Search</button>
         <button onClick={handleSignUp }>SignUp</button>
        <button onClick={handleLogIn}>LogIn</button>
        </div>
        </div>
        
    )
}