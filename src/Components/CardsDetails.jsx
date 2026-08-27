import {useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {SearchContext} from './SearchContext.jsx';
import {useContext } from 'react'


export default function CardDetails(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {cart, setCart} = useContext(SearchContext);

const{id} = useParams();
console.log(id);

function handleCart(){
  if(!data) return;
  const existingItem = cart.find((item) => item.id === data.id);
  if(existingItem){
    setCart(
      cart.map((item)=>
      item.id===data.id? {...item, quantity:item.quantity +1}:item
    )
    )
  }else{
  setCart([...cart,{...data, quantity:1}]);
  
  }
  navigate('/cart');
}

    useEffect(()=>{
        const fetchProduct= async()=>{
          try{
           setLoading(true)
            setError(null);
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            if(!res.ok){
              throw new Error(`Server returned status:${res.status}`);
            }

            const result = await res.json();
            setData(result)

        } catch(err){
          console.error("Fetch failed (Dev Log):", err.message);

          setError("Failed to load products. Please try again later.")
        }finally{
          setLoading(false);
        }}
        fetchProduct();
    },[id])
    
    if(loading){
      return <p>Loading products ...</p>
    }
    if(error){
      return <p>{error}</p>
    }
    console.log(data)


    return(
        <>
      <div style={{
  minHeight: '100vh',
  backgroundColor: '#b1abab',
  padding: '60px ',
  display: 'flex',
  justifyContent: 'center'
}}>
  <div style={{
    backgroundColor: '#514c4c',
    borderRadius: '12px',
    maxWidth: '600px',
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.25)'
  }}>

    
    <div style={{
      backgroundColor: '#cdc4c4',
      padding: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '280px'
    }}>
      <img
        src={data.thumbnail}
        alt={data.title}
        style={{
          maxHeight: '230px',
          maxWidth: '100%',
          objectFit: 'contain'
        }}
      />
    </div>

  
    <div style={{
      backgroundColor: '#443e3e',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '20px',
        fontWeight: '600',
        margin: 0,
        lineHeight: '1.4'
      }}>
        {data.title}
      </h1>

      <h2 style={{
        color: '#e8a83a',
        fontSize: '22px',
        fontWeight: '700',
        margin: 0
      }}>
        ${data.price}
      </h2>

      <p style={{
        color: 'rgba(255,255,255,0.85)',
        fontSize: '14px',
        lineHeight: '1.6',
        margin: 0
      }}>
        {data.description}
      </p>

      <div style={{
        marginTop: '8px',
        paddingTop: '12px',
        borderTop: '1px solid rgba(255,255,255,0.15)',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', margin: 0 }}>
          Category: <span style={{ color: 'white' }}>{data.category}</span>
        </p>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', margin: 0 }}>
          Rating: <span style={{ color: '#e8a83a' }}>{data.rating}</span>
        </p>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', margin: 0 }}>
          {data.rating.count} reviews
        </p>
      </div>
    </div>
<div style={{display:'flex', justifyContent:'space-around'}}>
  <button className="CartBtn">Buy Now</button>
  <button className="CartBtn" onClick={handleCart}>Add to cart</button>
</div>
 
  </div>
</div>

        </>
    )
}