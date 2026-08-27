import {useContext} from 'react'
import {useState} from 'react'
import {SearchContext} from '../Components/SearchContext.jsx'

export default function Carts(){
 const {cart, setCart} = useContext(SearchContext);

function handleMinus(id){
    return(
        setCart((prod)=>
           prod.map((item)=>
            item.id === id?{...item, quantity:item.quantity-1}:item
        )
.filter((item) => item.quantity>0)
        )
    )
}

function handlePlus(id){
    return(
        setCart((adding)=>
            adding.map((add)=> add.id === id? {...add, quantity:add.quantity+1}:add)
        )
    )
}


const grandTotal = cart.reduce((total,item)=>
    total+item.price*item.quantity,0
)

function handleRemove(id){
    return(
      setCart(cart.filter((item)=> item.id !== id))
    )
}

const totalQuantity = cart.reduce((sum, item)=>sum+item.quantity,0)
    return(
        <>
        <div style = {{display:'flex'}}>
        <div style={{backgroundColor:'#786d6d', flex:1}}>
            {cart.length === 0? (
                <p>Your cart is empty</p>
            ):(
                cart.map((items, index)=>
                <div key={items.id}>
                   <img src = {items.thumbnail} alt={items.title}/>
                    <h1>{items.title}</h1>
                    <p> Price per peace: ${items.price}</p>
                 <p>Quantity:</p><button onClick={()=>handleMinus(items.id)}>-</button><span>{items.quantity}</span><button onClick={()=>handlePlus(items.id)}>+</button>
                 <button style={{backgroundColor:'red', marginLeft:'150px'}}
                 onClick={()=>handleRemove(items.id)}>Remove</button>
                </div>
                )
                
            )}
            <div style={{backgroundColor:'#b4a5a5', height:'300px'}}>
                <h2>Total Quantity:{totalQuantity}</h2>
                <h2>GrandTotal:${grandTotal.toFixed(2)}</h2></div>
        </div>
        </div>
        </>
    )}