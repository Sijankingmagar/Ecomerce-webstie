import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Navbar(){
  const [input, setInput] = useState("");
  const Navigate = useNavigate();

  function handleClick(){
    Navigate(`/?q=${input}`);
    setInput("");
  }
  function handleSignUp(){
    Navigate(`/SignUpPath`);
  }
  function handleLogIn(){
    Navigate(`/LogInPath`);
  }

  const btnStyle = {
    padding: '10px 16px',
    borderRadius: '8px',
    backgroundColor: '#212121',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  };

  return(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'green',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 16px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '22px',
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
          flex: '1 1 200px',
          minWidth: '150px',
          maxWidth: '320px',
          padding: '10px 14px',
          borderRadius: '8px',
          border: 'none',
          outline: 'none',
          fontSize: '14px'
        }}
      />

      <button className="hover" onClick={handleClick} style={btnStyle}>
        Search
      </button>

      <button className="hover" onClick={handleSignUp} style={btnStyle}>
        SignUp
      </button>

      <button className="hover" onClick={handleLogIn} style={btnStyle}>
        LogIn
      </button>
    </div>
  );
}