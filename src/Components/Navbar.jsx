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
        <div style={{
  backgroundColor: 'green',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  padding: '10px 20px',
  height: '70px',
  position: 'fixed',
  width: '100%',
  top: 0,
  boxSizing: 'border-box',
  zIndex: 1000
}}>
  <h1 style={{
    margin: 0,
    marginRight: '60px',
    fontSize: '24px',
    color: 'white',
    fontFamily: 'serif'
  }}>
    E-Commerce
  </h1>

  <input
    placeholder="Search products"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    style={{
      width: '300px',
      padding: '10px 14px',
      borderRadius: '8px',
      border: 'none',
      outline: 'none',
      fontSize: '14px'
    }}
  />

  <button
    onClick={handleClick}
    style={{
      width: '120px',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: '#212121',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    }}
  >
    Search
  </button>

  <button
    onClick={handleSignUp}
    style={{
      width: '100px',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: '#212121',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    }}
  >
    SignUp
  </button>

  <button
    onClick={handleLogIn}
    style={{
      width: '100px',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: '#212121',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    }}
  >
    LogIn
  </button>
</div>
        </div>
      
        
    )
}